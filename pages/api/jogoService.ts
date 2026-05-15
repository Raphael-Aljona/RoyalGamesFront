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

type ListarJogo = {
    nome: string,
    preco: number,
    descricao: string,
    imagemUrl: File | null,
    usuarioIds: number[],
    categoriaIds: number[],
    plataformaID: number[],
    classificacaoIndicativaIds: number[],
    adminUsuario: boolean,
}

export async function getJogos() {
    try {
        const response = await api.get("/Jogo")

        const produtos = response.data.map((item:ListarJogo) => ({
            ...item,
            imagemUrl: `${api.defaults.baseURL}${item.imagemUrl}`,
        }))

        return produtos;
    } catch (e: any) {
        throw new Error(e.message);
    }
}

export async function getJogoById(id: number) {
    try {
        const response = await api.get(`/Jogo/${id}`);

        const produto = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`,
        }

        return produto;
    } catch (e: any) {
        throw new Error(e.message);
    }
}

export async function cadastrarJogo(dados: Jogo) {
    const formData = new FormData();

    try {
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