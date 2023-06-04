var RacuniAPI = require('RacuniAPI');

class RacuniSingleton {
  constructor() {
    this.Account = new RacuniAPI.AccountApi()
    this.Racuni = new RacuniAPI.RacunApi()
    this.Prodavnica = new RacuniAPI.ProdavnicaApi()
  }

  setAccessToken(data) {
    this.accessToken = data

    RacuniAPI.ApiClient.instance.authentications['OAuth2PasswordBearer'].accessToken = this.accessToken
  }
}

class Racuni {
  constructor() {
    throw new Error("Use Racuni.getInstance()")
  }

  static getInstance() {
    if (!Racuni.instance) {
      Racuni.instance = new RacuniSingleton()
    }
    return Racuni.instance
  }
}

module.exports = Racuni