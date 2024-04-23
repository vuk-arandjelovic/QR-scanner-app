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
// App Version && URL List
// ###########################################################
// Returns the current app version
export const postAddURL = async (recieptURL) => {
  const url = `/app/addRacun?url=${recieptURL}`;
  const response = await api.post(url);
  return response.data;
};
// ###########################################################
// End of Requests
// ###########################################################
export const postLogInToken = async (username, password) => {
  const url = `/auth/login`;
  console.log("login");
  const response = await api.post(url, {
    username: username,
    password: password,
  });
  return response.data.access_token;
};
export const postRegister = async (username, password) => {
  const url = `/auth/register`;
  console.log("register");
  const response = await api.post(url, {
    username: username,
    password: password,
  });
  return response.data;
};
