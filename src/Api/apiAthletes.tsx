
import apiClient from "./apiClient";
const getMyAthletes = () => apiClient.get('/my_athletes/')
const getDetailAthlete = (id : number) => apiClient.get('/my_athletes/' + id)

export default{
    getMyAthletes,
    getDetailAthlete
}