import axios from "axios";
import { API_URL } from "./PATHS";

// const apiGetRequests = () =>{
    let responseGlobal
    
    export const getAppVersion = async () => {
        const url = `${API_URL}/app_version`;
        console.log(url)
        const response = await axios.get(url);
        console.log(response.data);
        responseGlobal = response.data
        if(responseGlobal !== undefined)
            return responseGlobal
    };
    
    export const getProdavnicaAll = async () => {
        const url = `${API_URL}/prodavnica/all`;
        const response = await axios.get(url);
        console.log(response.data);
        responseGlobal = response.data
        if(responseGlobal !== undefined)
            return responseGlobal
    };
    
// }
// export default apiGetRequests