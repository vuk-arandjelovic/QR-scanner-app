import { BaseService } from "./base.service";
import { CONFIG } from "../config";

export class StoresService extends BaseService {
  constructor() {
    super("stores");
  }

  getStores() {
    return this.request.get(`/getUserStores`);
  }
}
export default new StoresService();
