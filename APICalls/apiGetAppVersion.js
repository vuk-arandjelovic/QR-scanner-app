import axios from "axios";

let responseGlobal

const getAppVersion = async () => {
    const url = `http://192.168.43.14:8000/app_version`;
    const response = await axios.get(url);
    console.log(response.data);
    responseGlobal = response.data
    if(responseGlobal !== undefined)
        return responseGlobal
};

export default getAppVersion



