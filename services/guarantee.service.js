import { BaseService } from "./base.service";

export class GuaranteeService extends BaseService {
  constructor() {
    super("guarantees");
  }

  createGuarantee(userId, billId, itemId, name, expirationDate) {
    return this.request.post("/", {
      user: userId,
      bill: billId,
      item: itemId,
      name: name,
      expiration: expirationDate,
    });
  }

  getUserGuarantees() {
    return this.request.get("/getUserGuarantees");
  }

  deleteGuarantee(id) {
    return this.request.delete(`/${id}`);
  }
}

export default new GuaranteeService();
