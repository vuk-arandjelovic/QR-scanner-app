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
  searchItems(query) {
    return this.request.get(`/search?name=${encodeURIComponent(query)}`);
  }
}
export default new ItemsService();
