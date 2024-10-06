import { BaseService } from "./base.service";
import { CONFIG } from "../config";

export class UserService extends BaseService {
  constructor() {
    super("user");
  }
  getUserData() {
    return this.request.get(`/getUserData`);
  }
}
export default new UserService();
