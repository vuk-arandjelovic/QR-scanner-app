import { BaseService } from "./base.service";

export class ScrapeService extends BaseService {
  constructor() {
    super("scrape");
  }

  scrape(url) {
    return this.request.post("/", {
      url,
    });
  }
}

export default new ScrapeService();
