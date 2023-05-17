import axios from "axios";
import { API_URL } from "../PATHS";
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