import apiClient from "./apiClient";
const getListArticles = () => apiClient.get('/blog/')

export default{
    getListArticles
}