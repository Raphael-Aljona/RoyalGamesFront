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

export async function getJogoById (id:number){
    try{
        const response = await api.get(`/Jogo/${id}`);

        console.log(response.data);
        return response.data;
    }catch (e:any){
        throw new Error(e.message);
    }
}