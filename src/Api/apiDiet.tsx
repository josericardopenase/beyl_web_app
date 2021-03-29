
import apiClient from "./apiClient";
const getFood = (filter : string, page : number, tags : number[] = []) => apiClient.get(`/food/?page=${page}&search=${filter}${tags.map((x : number) => `&tags=${x}`).join('')}`)
const getFoodTags = () => apiClient.get(`/food_tag/`)
const saveDiet = (idClient : number) => apiClient.post('/save_diet/' + idClient + "/")

export default{
    getFood,
    saveDiet,
    getFoodTags
}