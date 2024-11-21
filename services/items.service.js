import { BaseService } from "./base.service";
import { CONFIG } from "../config";

export class ItemsService extends BaseService {
  constructor() {
    super("items");
  }

  getAll() {
    return this.request.get(`/getAll`);
  }
  getFromBill(billId) {
    return this.request.get(`/getFromBill?billId=${billId}`);
  }
}
export default new ItemsService();
