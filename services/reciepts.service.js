import { BaseService } from "./base.service";
import { CONFIG } from "../config";

export class RecieptsService extends BaseService {
  constructor() {
    super("bills");
  }

  getReciepts() {
    return this.request.get(`/getUserBills`);
  }
}
export default new RecieptsService();
