import { BaseService } from "./base.service";
import { CONFIG } from "../config";

export class AuthService extends BaseService {
  constructor() {
    super("auth");
  }
  checkSession() {
    return this.request.get(`/login`);
  }
  checkUsername(username) {
    return this.request.get(`/check?username=${username}`);
  }
  login(email, password) {
    return this.request.post(`/login`, { email, password });
  }
  register(username, email, password) {
    return this.request.post(`/register`, { username, email, password });
  }
}
export default new AuthService();
