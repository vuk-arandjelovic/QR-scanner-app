import { BaseService } from "./base.service";

export class StoresService extends BaseService {
  constructor() {
    super("stores");
  }

  getStores() {
    return this.request.get(`/getUserStores`);
  }
}
export default new StoresService();
