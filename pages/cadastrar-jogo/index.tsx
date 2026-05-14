import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./cadastrar-jogo.module.css"
import Btn from "../../components/btn/btn";
import Catalogo from "../../components/catalogo/catalogo";
import secureLocalStorage from "react-secure-storage";
import {use, useEffect, useState} from "react";
import {router} from "next/client";
import {erro} from "@/utils/toast";
import {cadastrarJogo} from "../api/jogoService";
import {getPlataforma} from "../api/plataformaService";
import {getCategorias} from "../api/categoriaService";

type Plataforma = {
    plataformaIds: number;
    nome: string;
}

type Categoria = {
    categoriaID: number;
    nome: string;
}

const CadastrarJogo = () => {

    const [nome, setNome] = useState<string>("");
    const [preco, setPreco] = useState<number>(0);
    const [descricao, setDescricao] = useState<string>("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [usuarioIds, setUsuarioIds] = useState<number[]>([]);
    const [categoriaIds, setCategoriaIds] = useState<number[]>([]);
    const [plataformaIds, setPlataformaIds] = useState<number[]>([]);
    const [classificacaoIndicativaIds, setClassificacaoIndicativaIds] = useState<number[]>([]);
    const [adminUsuario, setAdminUsuario] = useState<boolean>(false);

    const [plataforma, setPlataforma] = useState<Plataforma[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const token = secureLocalStorage.getItem("token");

    async function cadastrarNovoJogo() {
        try {
            const dados = {
                nome,
                preco,
                descricao,
                imagem,
                usuarioIds,
                categoriaIds,
                plataformaIds,
                classificacaoIndicativaIds,
                adminUsuario,
            }

            await cadastrarJogo(dados);
        } catch (e: any) {
            erro(e.message)
        }
    }

    async function getListaPlaformas() {
        try {
            const dados = await getPlataforma();

            setPlataforma(dados)
            console.log(dados);
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
    }, [])

    return (
        <>
            <Header></Header>
            <main>
                <section className={styles.cadastrar_jogo}>
                    <div className={`${styles.conteudo_form} glass-container container-grid`}>
                        <h1>Cadastrar novo jogo</h1>
                        <form action="">
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
                                            <select className={`glass-container`} name="" id="">
                                                {categorias.map(value =>
                                                    (
                                                        <option key={value.categoriaID}>{value.nome}</option>
                                                    ))}
                                            </select>
                                        </div>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Classificação Indicativa</label>
                                            <select className={`glass-container`} name="" id=""></select>
                                        </div>
                                    </div>
                                    <div className={styles.campos_baixo}>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Plataforma</label>
                                            <select className={`glass-container`} name="" id="">
                                                {plataforma.map(value => (
                                                    <option key={value.plataformaIds}
                                                            value={value.nome}>{value.nome}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Imagem</label>
                                            <input className={`glass-container`} type="image"/>
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