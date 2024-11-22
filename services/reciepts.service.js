import { BaseService } from "./base.service";
import { CONFIG } from "../config";

export class RecieptsService extends BaseService {
  constructor() {
    super("bills");
  }

  getReciepts() {
    return this.request.get(`/getUserBills`);
  }
  getRecieptsDetailed() {
    return this.request.get(`/getUserBillsDetailed`);
  }
  getReciept(id) {
    return this.request.get(`/${id._id}`);
  }
}
export default new RecieptsService();
