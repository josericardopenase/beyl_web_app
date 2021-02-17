
import apiClient from "./apiClient";

const getMyAthletes = () => apiClient.get('/my_athletes/')
const getDetailAthlete = (id : number) => apiClient.get('/my_athletes/' + id)

const verifyEmail = (email : string) => apiClient.post('/register_trainer/verify_email/', {email : email})

export default{
    getMyAthletes,
    getDetailAthlete,
    verifyEmail
}