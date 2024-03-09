// Get Request Imports
import {
  getAppVersion,
  getUrlList,
  getUserData,
  getProdavnicaAll,
  getArtikalAll,
  getArtikalCenaAll,
  getRacunAll,
  getRacunAllId,
  getRacunAllURL,
  getArtikalById,
  getArtikalByNazivAndProdavnicaId,
  getArtikalByNaziv,
  getArtikalCenaById,
  getRacunById,
} from "./APIRequests/apiGetRequests";
// Post Request Imports
import { postAddURL, postLogInToken } from "./APIRequests/apiPostRequests";

// Export
export default {
  getAppVersion,
  getUrlList,
  getUserData,
  getProdavnicaAll,
  getArtikalAll,
  getArtikalCenaAll,
  getRacunAll,
  getRacunAllId,
  getRacunAllURL,
  getArtikalById,
  getArtikalByNazivAndProdavnicaId,
  getArtikalByNaziv,
  getArtikalCenaById,
  getRacunById,
  postAddURL,
  postLogInToken,
};
