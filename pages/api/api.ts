import axios from "axios";

const apiLocal = "https://localhost:7127/api/"

export const api = axios.create({
    baseURL: apiLocal,
})

api.interceptors.request.use((config) => {
    const token:any = localStorage.getItem("token");

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})