import { useContext } from "react";
import { store } from "../Store/store";
const { create } = require("apisauce");

 export const apiUrl = 'http://192.168.0.14:9000/v1'

const apiClient = create({
    baseURL: apiUrl
    
})
apiClient.addAsyncRequestTransform(async (request : any) => {
    const authToken = store.getState().auth.token;

    if (!authToken) return;

    request.headers["Authorization"] = "Token " +  authToken;
});

export default apiClient