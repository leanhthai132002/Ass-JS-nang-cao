import axios from "axios";
const apiAxios = axios.create({
    baseURL: 'https://6291d9d6cd0c91932b68fe1f.mockapi.io/'
});

export default apiAxios;