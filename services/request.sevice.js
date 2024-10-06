import axios from "axios";
import { CONFIG } from "../config";
import StorageService from "./storage.service";

export class RequestService {
  url;
  instance;
  collectionName;

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

  _handleHeaders = async (c) => {
    if (CONFIG.auth_token) {
      c.headers["Authorization"] = `Bearer ${CONFIG.auth_token}`;
    } else {
      const token = await StorageService.get("token");
      if (token) c.headers["Authorization"] = `Bearer ${token}`;
    }
    return c;
  };

  _handleErrors(error) {
    return error?.response?.data || error?.response || error;
  }

  _handleRequestErrors = (error) => ({ error: error?.response || error });

  _handleResponse(response) {
    return response?.data || response;
  }
}

export default new RequestService();
