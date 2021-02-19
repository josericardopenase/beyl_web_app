
import apiClient from "./apiClient";
const getFood = (filter : string, page : number) => apiClient.get(`/food/?page=${page}&search=${filter}`)
const saveDiet = (idClient : number) => apiClient.post('/save_diet/' + idClient + "/")

export default{
    getFood,
    saveDiet
}