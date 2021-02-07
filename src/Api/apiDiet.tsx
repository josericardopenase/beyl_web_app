
import apiClient from "./apiClient";
const getFood = (filter : string, page : number) => apiClient.get(`/food/?page=${page}&search=${filter}`)

export default{
    getFood,
}