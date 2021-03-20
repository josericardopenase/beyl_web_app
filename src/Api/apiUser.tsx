
import apiClient from "./apiClient";

const verifyEmail = (token : string) => apiClient.post('/verify_email/', {token : token})
const sendRecoverPassword = (email : string) => apiClient.post('/change_password/', {email : email})
const recoverPassword = (token : string, password : string) => apiClient.post('/perform_change_password/', {password : password, token : token})

export default{
    verifyEmail,
    sendRecoverPassword,
    recoverPassword
}