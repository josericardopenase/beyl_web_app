import { useContext } from "react";

const { create } = require("apisauce");

const apiClient = create({
    baseURL: 'http://192.168.0.14:9000/v1/',
    
})
apiClient.addAsyncRequestTransform(async (request : any) => {
/*     const authToken = await storage.getUser();
        if (!authToken) return; */
    request.headers["Authorization"] = "Token " +  "827a9e27f9f29b1f1c1c9f61a49fac631bc9a0f0";
});
    

export default apiClient