import {api} from "./api"
import {forEach} from "eslint-config-next";

type Jogo = {
    nome: string,
    preco: number,
    descricao: string,
    imagem: File | null,
    usuarioIds: number[],
    categoriaIds: number[],
    plataformaID: number[],
    classificacaoIndicativaIds: number[],
    adminUsuario: boolean,
}

export async function getJogos() {
    try {
        const response = await api.get("/Jogo")

        console.log(response.data);
        return response.data;
    } catch (e: any) {
        throw new Error(e.message);
    }
}

export async function getJogoById(id: number) {
    try {
        const response = await api.get(`/Jogo/${id}`);

        console.log(response.data);
        return response.data;
    } catch (e: any) {
        throw new Error(e.message);
    }
}

export async function cadastrarJogo(dados: Jogo) {
    const formData = new FormData();

    try {
        console.log(`dados: ${dados.nome}`);
        console.log(`dados: ${dados.adminUsuario}`);
        console.log(`dados: ${dados.imagem}`);
        console.log(`dados: ${dados.usuarioIds}`);
        console.log(`dados: ${dados.preco}`);
        console.log(`dados: ${dados.categoriaIds}`);
        console.log(`dados: ${dados.classificacaoIndicativaIds}`);
        console.log(`dados: ${dados.descricao}`);
        console.log(`dados: ${dados.plataformaID}`);

        formData.append("Nome", dados.nome,);
        formData.append("Preco", dados.preco.toString(),);
        formData.append("Descricao", dados.descricao,);
        if (dados.imagem) {
            formData.append("Imagem", dados.imagem,);
        }
        dados.usuarioIds.forEach(value => {
            formData.append("UsuarioIds", value.toString(),);
        })
        dados.categoriaIds.forEach(value => {
            formData.append("CategoriaIds", value.toString(),);
        })
        dados.plataformaID.forEach(value => {
            formData.append("PlataformaIds", value.toString(),);
        })
        dados.classificacaoIndicativaIds.forEach(value => {
            formData.append("ClassificacaoIndicativaIds", value.toString(),);
        })
        formData.append("AdminUsuario", dados.adminUsuario.toString(),);

        await api.post("/Jogo", formData)
    } catch (e: any) {
        throw new Error(e.message);
    }
}