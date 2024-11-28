import { BaseService } from "./base.service";

export class UserService extends BaseService {
  constructor() {
    super("user");
  }
  getUserData() {
    return this.request.get(`/getUserData`);
  }
}
export default new UserService();
