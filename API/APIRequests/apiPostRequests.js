import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

// ###########################################################
// App Version && URL List
// ###########################################################
// Returns the current app version
export const postAddURL = async (recieptURL) => {
  const url = `${API_URL}/racun/?url=${recieptURL}`;
  console.log(url);
  const response = await axios.post(url);
  if (response?.data !== undefined) return response.data;
};
// ###########################################################
// End of Requests
// ###########################################################
export const postLogInToken = async (username, password) => {
  const url = `${API_URL}/token`;
  // console.log(url)
  const response = await axios.postForm(url, {
    username: username,
    password: password,
    grant_type: "password",
  });
  // console.log(response);
  if (response?.data !== undefined) return response.data.access_token;
};
