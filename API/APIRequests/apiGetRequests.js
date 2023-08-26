import axios from "axios";
const API_URL = "http://borovnica.ddns.net:10000"

let responseGlobal
// ###########################################################
// App Version && URL List
// ###########################################################
// Returns the current app version
export const getAppVersion = async () => {
    const url = `${API_URL}/app_version`;
    console.log(url)
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return [responseGlobal]
}; 
// Returns a list of Reciept URLs
export const getUrlList = async () => {
    const url = `${API_URL}/url_list`;
    console.log(url)
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return responseGlobal
};
// ###########################################################
// Requests that return whole tables or columns
// ###########################################################
// Returns all Prodavnica entries
export const getProdavnicaAll = async () => {
    const url = `${API_URL}/prodavnica/all`;
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return responseGlobal
};
// Returns all Artikal entries
export const getArtikalAll = async () => {
    const url = `${API_URL}/artikal/all`;
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return responseGlobal
};
// Returns all Artikal_cena entries
export const getArtikalCenaAll = async () => {
    const url = `${API_URL}/artikal_cena/all`;
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return responseGlobal
};
// Returns all Racun entries
export const getRacunAll = async (logInToken) => {
    const url = `${API_URL}/racun/all`;
    const response = await axios.get(url,{ 
        headers: {"Authorization" : `Bearer ${logInToken}`} 
    });
    // console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return responseGlobal
};
// Returns a list of IDs from all Racun entries
export const getRacunAllId = async () => {
    const url = `${API_URL}/racun/all/id`;
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return responseGlobal
};
// Returns a list of URLs from all Racun entries
export const getRacunAllURL = async () => {
    const url = `${API_URL}/racun/all/url`;
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return responseGlobal
};
// ###########################################################
// Requests related to Artikal using parameters
// ###########################################################
// Returns an Artikal by Artikal ID
export const getArtikalById = async (artikal_id) => {
    const url = `${API_URL}/artikal/id/${artikal_id}`;
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return [responseGlobal]
};
// Returns an Artikal by Artikal Naziv and Prodavnica ID
export const getArtikalByNazivAndProdavnicaId = async (artikal_naziv, prodavnica_id) => {
    const url = `${API_URL}/artikal/naziv/prodavnica/?id_prodavnica=${prodavnica_id}&naziv=${artikal_naziv}`;
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return [responseGlobal]
};
// Returns an Artikal by Artikal Naziv
export const getArtikalByNaziv = async (artikal_naziv) => {
    const url = `${API_URL}/artikal/naziv/?naziv=${artikal_naziv}`;
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return [responseGlobal]
};
// ###########################################################
// Requests related to Artikal_cena using parameters
// ###########################################################
// Returns an Artikal_cena by Artikal ID
export const getArtikalCenaById = async (artikal_id) => {
    const url = `${API_URL}/artikal_cena/id/${artikal_id}`;
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return [responseGlobal]
};
// ###########################################################
// Requests related to Racun using parameters
// ###########################################################
// Returns a Racun by Racun ID
export const getRacunById = async (racun_id) => {
    const url = `${API_URL}/racun/id/${racun_id}`;
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return [responseGlobal]
};
// ###########################################################
// End of Requests
// ###########################################################
