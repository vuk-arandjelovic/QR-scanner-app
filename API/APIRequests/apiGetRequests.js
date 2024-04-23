import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;
const api = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    // Get the authorization token from AsyncStorage
    const token = await AsyncStorage.getItem("token");
    // If token exists, set it in the request header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// ###########################################################
// App Version && URL List && User
// ###########################################################
// Returns the current app version
export const getAppVersion = async () => {
  const url = `/app_version`;
  const response = await api.get(url);
  return response.data;
};
// Returns a list of Reciept URLs
export const getUrlList = async () => {
  const url = `/url_list`;
  const response = await api.get(url);
  return response.data;
};
// Returns a single user info
export const getUserData = async () => {
  const url = `/user/me/`;
  const response = await api.get(url);
  console.log(response);
  return response.data;
};
// ###########################################################
// Requests that return whole tables or columns
// ###########################################################
// Returns all Prodavnica entries
export const getProdavnicaAll = async () => {
  const url = `/prodavnica/all`;
  const response = await api.get(url);
  return response.data;
};
// Returns all Artikal entries
export const getArtikalAll = async () => {
  const url = `/artikal/all`;
  const response = await api.get(url);
  console.log(response.data);
  return response.data;
};
// Returns all Artikal_cena entries
export const getArtikalCenaAll = async () => {
  const url = `/artikal_cena/all`;
  const response = await api.get(url);
  return response.data;
};
// Returns all Racun entries
export const getRacunAll = async () => {
  return await getRequest("getRacunAll");
};
// Returns a list of IDs from all Racun entries
export const getRacunAllId = async () => {
  const url = `/racun/all/id`;
  const response = await api.get(url);
  return response.data;
};
// Returns a list of URLs from all Racun entries
export const getRacunAllURL = async () => {
  const url = `/racun/all/url`;
  const response = await api.get(url);
  return response.data;
};
// ###########################################################
// Requests related to Artikal using parameters
// ###########################################################
// Returns an Artikal by Artikal ID
export const getArtikalById = async (artikal_id) => {
  const url = `/artikal/id/${artikal_id}`;
  const response = await api.get(url);
  return response.data;
};
// Returns an Artikal by Artikal Naziv and Prodavnica ID
export const getArtikalByNazivAndProdavnicaId = async (
  artikal_naziv,
  prodavnica_id
) => {
  const url = `/artikal/naziv/prodavnica/?id_prodavnica=${prodavnica_id}&naziv=${artikal_naziv}`;
  const response = await api.get(url);
  return [response.data];
};
// Returns an Artikal by Artikal Naziv
export const getArtikalByNaziv = async (artikal_naziv) => {
  const url = `/artikal/naziv/?naziv=${artikal_naziv}`;
  const response = await api.get(url);
  return [response.data];
};
// ###########################################################
// Requests related to Artikal_cena using parameters
// ###########################################################
// Returns an Artikal_cena by Artikal ID
export const getArtikalCenaById = async (artikal_id) => {
  const url = `/artikal_cena/id/${artikal_id}`;
  const response = await api.get(url);
  return [response.data];
};
// ###########################################################
// Requests related to Racun using parameters
// ###########################################################
// Returns a Racun by Racun ID
export const getRacunById = async (racun_id) => {
  const url = `/racun/id/${racun_id}`;
  const response = await api.get(url);
  return [response.data];
};
// ###########################################################
// End of Requests
// ###########################################################
const getRequest = async (requestName, requestData = "") => {
  try {
    const response = await api.get(`${paths[requestName]}${requestData}`);
    console.log(`Get Request Response: ${JSON.stringify(response)}`);
    if (response.status === 200) return response.data;
    else throw new Error();
  } catch (error) {
    console.log(`Get Request Error: ${JSON.stringify(error)}`);
    console.log(error);
    return error;
  }
};

const paths = {
  getRacunAll: "/app/getRacuni",
};
