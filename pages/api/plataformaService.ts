import {api} from "./api";

export async function getPlataforma(){
    try{
        const response = await api.get("/Plataforma");

        console.log(response.data);
        return response.data;
    }catch (e: any){
        throw new Error(e);
    }
}