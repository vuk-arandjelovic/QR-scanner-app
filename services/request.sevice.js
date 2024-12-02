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

  _handleHeaders = async (config) => {
    const token = await StorageService.get("token");
    if (!token) {
      return config;
    }
    try {
      const timeUntilExpiry = jwtDecode(token).exp * 1000 - Date.now();
      // console.log("Time until expiry (ms):", timeUntilExpiry);
      // console.log(CONFIG.api.refreshTime);
      if (timeUntilExpiry < CONFIG.api.refreshTime) {
        try {
          const response = await axios.post(`${CONFIG.api.core}/auth/refresh`, {
            token,
          });

          if (response?.data?.response?.token) {
            await StorageService.set("token", response.data.response.token);
            config.headers[
              "Authorization"
            ] = `Bearer ${response.data.response.token}`;
          } else {
            console.error("No token in refresh response");
          }
        } catch (error) {
          console.error("Refresh failed:", error.response?.data || error);
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      } else {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Token processing error:", error);
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
      } catch (err) {
        console.log("Error handling unauthorized:", err);
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
