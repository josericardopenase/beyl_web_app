
import apiClient from "./apiClient";
const getRutine = (id : number) => apiClient.get('/rutine/' + id)
const getRutineDays = (id : number) => apiClient.get('/rutine_day/' + id)
const getRutineGroup = (id : number) => apiClient.get('/rutine_group/' + id)
const getRutineExcersise = (id : number) => apiClient.get('/rutine_excersise/' + id)
const getExcersise = (filter : string, page : number) => apiClient.get(`/excersise/?page=${page}&search=${filter}`)
const saveRutine = (idClient : number) => apiClient.post('/save_rutine/' + idClient + "/")

export default{
    getRutine,
    getRutineDays,
    getRutineGroup,
    getRutineExcersise,
    getExcersise,
    saveRutine
}