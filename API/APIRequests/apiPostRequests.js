import axios, { toFormData } from "axios";
const API_URL = "http://borovnica.ddns.net:10000"

let responseGlobal
// ###########################################################
// App Version && URL List
// ###########################################################
// Returns the current app version
export const postAddURL = async (recieptURL) => {
    const url = `${API_URL}/racun/add?url=${recieptURL}`;
    console.log(url)
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return responseGlobal
}; 
// ###########################################################
// End of Requests
// ###########################################################
export const postLogInToken = async (username, password) => {
    const url = `${API_URL}/token`;
    // console.log(url)
    const response = await axios.postForm(url,{
        username:username,
        password:password,
        grant_type:"password"
    })
    // console.log("cao")
    // console.log(response)
    // console.log(responseGlobal)
    // console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
    return responseGlobal
};
