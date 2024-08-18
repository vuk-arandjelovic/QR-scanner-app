import { RequestService } from "./request.sevice";
import { StorageService } from "./storage.service";

export class BaseService {
  request;
  collectionName;
  storage;

  constructor(collectionName) {
    this.collectionName = collectionName;

    this.storage = new StorageService();

    this.request = new RequestService(collectionName);
  }

  // TODO: add options = {}
  // async get(id) {
  //   return await this.request.get(`/${this.collectionName}${id}`);
  // }
  // async post(id) {
  //   return await this.request.post(`/${this.collectionName}${id}`);
  // }
  // async put(id) {
  //   return await this.request.put(`/${this.collectionName}${id}`);
  // }
  // async delete(id) {
  //   return await this.request.delete(`/${this.collectionName}${id}`);
  // }

  // async update(id, body) {
  //   return await this.request.put(`/${this.collectionName}${id}`, body);
  // }

  async create(body, options = {}) {
    const { queryParams, path, ...other } = options;

    const _queryParams = {
      ...(options.queryParams ? options.queryParams : {}),
    };

    const url = this.attachQueryParams(
      path || `/${this.collectionName}`,
      _queryParams
    );
    return await this.request.post(url, body, { ...other });
  }

  async delete(id) {
    return await this.request.delete(`/${this.collectionName}/${id}`);
  }

  serialize = function (obj) {
    var str = [];
    /* eslint-disable */
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    /* eslint-enable */
    return str.join("&");
  };

  attachQueryParams(url, params) {
    let newUrl = url;

    if (newUrl && params) {
      newUrl += "?";
      Object.keys(params).forEach(
        (key) => (newUrl += `${encodeURI(key)}=${encodeURI(params[key])}&`)
      );
    }

    return newUrl;
  }
}
