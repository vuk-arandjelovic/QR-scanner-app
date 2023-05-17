// Get Request Imports
import { getAppVersion, 
  getUrlList,
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
  getRacunById } from "./APIRequests/apiGetRequests";
// Post Request Imports
import { postAddURL } from "./APIRequests/apiPostRequests";

// Export
export default { getAppVersion,
  getUrlList,
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
  postAddURL
 }