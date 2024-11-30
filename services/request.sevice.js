import axios from "axios";
import { CONFIG } from "../config";
import StorageService from "./storage.service";
import { Alert } from "react-native";
import { navigationRef } from "@/navigation";
import { jwtDecode } from "jwt-decode";
export class RequestService {
  url;
  instance;
  collectionName;
  static isHandlingSession = false;
  constructor(collectionName) {
    this.init();
    this.collectionName = collectionName;
  }

  init() {
    this.instance = axios.create({ headers: {} });
    this.instance.interceptors.request.use(
      this._handleHeaders,
      this._handleRequestErrors
    );
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleErrors
    );
  }

  get(url, options = {}) {
    return this.instance.get(this.wrapper(url), options);
  }

  post(url, body, options = {}) {
    return this.instance.post(this.wrapper(url), body, options);
  }

  delete(url, options = {}) {
    return this.instance.delete(this.wrapper(url), options);
  }

  put(url, body, options = {}) {
    return this.instance.put(this.wrapper(url), body, options);
  }

  getNoAuth(url, options = {}) {
    return this.get(this.wrapper(url), options);
  }

  wrapper(url) {
    return url.includes("http")
      ? url
      : `${CONFIG.api.core}/${this.collectionName}${url}`;
  }

  axiosRaw() {
    const instance = axios.create({ headers: {} });
    instance.interceptors.response.use(
      this._handleResponse,
      this._handleErrors
    );
    return instance;
  }

  raw() {
    this.instance = this.axiosRaw();
    return this;
  }

  // _handleHeaders = async (c) => {
  //   if (CONFIG.auth_token) {
  //     // console.log("Used token from config");
  //     c.headers["Authorization"] = `Bearer ${CONFIG.auth_token}`;
  //   } else {
  //     const token = await StorageService.get("token");
  //     // console.log("Used token from storage");
  //     if (token) c.headers["Authorization"] = `Bearer ${token}`;
  //   }
  //   return c;
  // };
  _handleHeaders = async (config) => {
    const token = await StorageService.get("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);

        const timeUntilExpiry = decoded.exp * 1000 - Date.now();
        console.log("Time until expiry (ms):", timeUntilExpiry);
        console.log("Should refresh:", timeUntilExpiry < 5 * 60 * 1000);

        if (timeUntilExpiry < 5 * 60 * 1000) {
          console.log("Attempting token refresh");
          try {
            const response = await AuthService.refreshToken(token);
            console.log("Refresh response:", response);
            const newToken = response.token;
            await StorageService.set("token", JSON.stringify(newToken));
            config.headers["Authorization"] = `Bearer ${newToken}`;
          } catch (error) {
            console.error("Refresh failed:", error);
          }
        } else {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Token processing error:", error);
      }
    }
    return config;
  };
  _handleErrors = async (error) => {
    if (error?.response?.status === 401 && !RequestService.isHandlingSession) {
      RequestService.isHandlingSession = true;
      try {
        await StorageService.delete("token");

        await new Promise((resolve) => {
          Alert.alert(
            "Session Expired",
            "Your session has expired. Please log in again.",
            [{ text: "OK", onPress: resolve }]
          );
        });

        if (navigationRef.current) {
          navigationRef.current.reset({
            index: 0,
            routes: [{ name: "Welcome" }],
          });
        }
      } catch (innerError) {
        console.log("Error handling unauthorized:", innerError);
      } finally {
        RequestService.isHandlingSession = false;
      }
    }
    return Promise.reject(error?.response?.data || error?.response || error);
  };

  _handleRequestErrors = (error) => ({ error: error?.response || error });

  _handleResponse(response) {
    return response?.data || response;
  }
}

export default new RequestService();
