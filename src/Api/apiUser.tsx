
import apiClient from "./apiClient";

const verifyEmail = (token : string) => apiClient.post('/verify_email/', {token : token})

export default{
    verifyEmail
}