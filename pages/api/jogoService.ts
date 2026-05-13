import {api} from "./api"

export async function getJogos (){
    try{
        const response = await api.get("/Jogo")

        console.log(response.data);
        return response.data;
    }catch (e:any) {
        throw new Error(e.message);
    }
}