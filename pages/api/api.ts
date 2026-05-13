import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const apiLocal = "https://localhost:7127/api/"

export const api = axios.create({
    baseURL: apiLocal,
})

api.interceptors.request.use((config) => {
    const token:any = secureLocalStorage.getItem("token");

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})