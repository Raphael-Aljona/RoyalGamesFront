import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./cadastrar-jogo.module.css"
import Btn from "../../components/btn/btn";
import Catalogo from "../../components/catalogo/catalogo";
import secureLocalStorage from "react-secure-storage";
import {FormEvent, use, useEffect, useState} from "react";
import {router} from "next/client";
import {erro} from "@/utils/toast";
import {cadastrarJogo} from "../api/jogoService";
import {getPlataforma} from "../api/plataformaService";
import {getCategorias} from "../api/categoriaService";
import {jwtDecode} from "jwt-decode";

type Plataforma = {
    plataformaID: number;
    nome: string;
}

type Categoria = {
    categoriaID: number;
    nome: string;
}

type Classificacao = {
    classificacao: string,
    classificacaoIndicativaIds: number,
}


const classificacaoIndicativa: Classificacao[] = [
    {classificacao: "Livre", classificacaoIndicativaIds: 0},
    {classificacao: "10+", classificacaoIndicativaIds: 1},
    {classificacao: "12+", classificacaoIndicativaIds: 2},
    {classificacao: "14+", classificacaoIndicativaIds: 3},
    {classificacao: "16+", classificacaoIndicativaIds: 4},
    {classificacao: "18+", classificacaoIndicativaIds: 5},
]

type tokenDecoded = {
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": number
}

const CadastrarJogo = () => {

    const [nome, setNome] = useState<string>("");
    const [preco, setPreco] = useState<number>(0);
    const [descricao, setDescricao] = useState<string>("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [usuarioIds, setUsuarioIds] = useState<number[]>([]);
    const [categoriaIds, setCategoriaIds] = useState<number[]>([]);
    const [plataformaID, setPlataformaIds] = useState<number[]>([]);
    const [classificacaoIndicativaIds, setClassificacaoIndicativaIds] = useState<number[]>([]);
    const [adminUsuario, setAdminUsuario] = useState<boolean>(true);

    const [plataforma, setPlataforma] = useState<Plataforma[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const token = secureLocalStorage.getItem("token");

    async function cadastrarNovoJogo(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const dados = {
                nome,
                preco,
                descricao,
                imagem,
                usuarioIds,
                categoriaIds,
                plataformaID,
                classificacaoIndicativaIds,
                adminUsuario,
            }

            console.log(dados);

            await cadastrarJogo(dados);
        } catch (e: any) {
            erro(e.message)
        }
    }

    async function getUsuarioId(){
        const token = secureLocalStorage.getItem("token");

        const teste = jwtDecode<tokenDecoded>(token)
        const idUsuario = teste["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]

        await setUsuarioIds([idUsuario]);
    }

    async function getListaPlaformas() {
        try {
            const dados = await getPlataforma();

            setPlataforma(dados)
        } catch (err: any) {
            erro(err.message)
        }
    }

    async function getListaCategorias() {
        try {
            const dados = await getCategorias();

            setCategorias(dados);
        } catch (err: any) {
            erro(err.message)
        }
    }

    useEffect(() => {
        if (token == null) {
            router.push("/home");
            return;
        }

        getListaPlaformas();
        getListaCategorias();
        getUsuarioId();

    }, [])

    console.log(plataformaID);

    return (
        <>
            <Header></Header>
            <main>
                <section className={styles.cadastrar_jogo}>
                    <div className={`${styles.conteudo_form} glass-container container-grid`}>
                        <h1>Cadastrar novo jogo</h1>
                        <form action="" onSubmit={cadastrarNovoJogo}>
                            <div className={styles.form}>
                                <div className={styles.campos_esquerda}>
                                    <div className={`${styles.campo_texto}`}>
                                        <label htmlFor="">Nome</label>
                                        <input value={nome} className={`glass-container`} onChange={
                                            event => setNome(event.target.value)
                                        } type="text"/>
                                    </div>
                                    <div className={styles.campos_meio}>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Valor</label>
                                            <input className={`glass-container`} value={preco} onChange={event =>
                                                setPreco(Number(event.target.value))}
                                                   type="text"/>
                                        </div>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Gênero</label>
                                            <select multiple className={`glass-container`} name="" id=""
                                                    value={categoriaIds} onChange={event => {
                                                setCategoriaIds(
                                                    Array.from(event.target.selectedOptions).map((options) => Number(options.value))
                                                )
                                            }}>
                                                {categorias.map(value =>
                                                    (
                                                        <option key={value.categoriaID}
                                                                value={value.categoriaID}>{value.nome}</option>
                                                    ))}
                                            </select>
                                        </div>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Classificação Indicativa</label>
                                            <select className={`glass-container`} name="" id=""
                                                    value={classificacaoIndicativaIds.toString()} onChange={event => {
                                                setClassificacaoIndicativaIds(
                                                    Array.from(event.target.selectedOptions).map((option) => Number(option.value))
                                                )
                                            }}>
                                                <option value="" disabled selected>Ex: Livre</option>
                                                {classificacaoIndicativa.map(value => (
                                                    <option key={value.classificacaoIndicativaIds}
                                                            value={value.classificacaoIndicativaIds}>{value.classificacao}</option>
                                                ))}

                                            </select>
                                        </div>
                                    </div>
                                    <div className={styles.campos_baixo}>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Plataforma</label>
                                            <select multiple className={`glass-container`} name="" id=""
                                                    value={plataformaID} onChange={event => {
                                                setPlataformaIds(
                                                    Array.from(event.target.selectedOptions).map((options) => Number(options.value))
                                                )
                                            }}>

                                                {plataforma.map(value => (
                                                    <option key={value.plataformaID}
                                                            value={value.plataformaID}>{value.nome}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Imagem</label>
                                            <input className={`glass-container`} type="file" onChange={event => {
                                                if (event.target.files && event.target.files[0]) {
                                                    setImagem(event.target.files[0])
                                                }
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.campo_direita}>
                                    <div className={`${styles.campo_texto}`}>
                                        <label htmlFor="">Descrição</label>
                                        <textarea value={descricao} className={`glass-container`} onChange={
                                            event => setDescricao(event.target.value)
                                        }/>
                                    </div>
                                </div>
                            </div>
                            <Btn>Cadastrar</Btn>
                        </form>
                    </div>

                </section>
                <section className={styles.catalogo}>
                    <h2>Lista de Jogos</h2>
                    <Catalogo></Catalogo>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default CadastrarJogo