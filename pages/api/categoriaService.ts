import {api} from './api'

export async function getCategorias() {
    try {
        const response = await api.get('/Categoria');

        console.log(response.data);
        return response.data;
    } catch (e: any) {
        throw new Error(e);

    }
}