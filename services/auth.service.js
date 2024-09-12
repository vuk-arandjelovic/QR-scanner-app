import { BaseService } from "./base.service";
import { CONFIG } from "../config";

export class AuthService extends BaseService {
  constructor() {
    super("auth");
  }
  saveToken(token) {
    CONFIG.auth_token = token;
  }
  checkSession(token) {
    this.saveToken(token);
    return this.request.get(`/login`);
  }
  checkUsername(username) {
    return this.request.get(`/check?username=${username}`);
  }
  async login(email, password) {
    const res = await this.request.post(`/login`, { email, password });
    this.saveToken(res?.response?.token);
    return res;
  }
  register(username, email, password) {
    return this.request.post(`/register`, { username, email, password });
  }
}
export default new AuthService();
