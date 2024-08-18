import { BaseService } from "./base.service";
import { CONFIG } from "../config";

export class RecieptsService extends BaseService {
  constructor() {
    super("reciepts");
  }
}
export default new RecieptsService();
