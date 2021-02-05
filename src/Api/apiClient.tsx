import { useContext } from "react";

const { create } = require("apisauce");

const apiClient = create({
    baseURL: 'http://127.0.0.1:8000/v1/',
    
})
apiClient.addAsyncRequestTransform(async (request : any) => {
/*     const authToken = await storage.getUser();
        if (!authToken) return; */
    request.headers["Authorization"] = "Token " +  "827a9e27f9f29b1f1c1c9f61a49fac631bc9a0f0";
});
    

export default apiClient