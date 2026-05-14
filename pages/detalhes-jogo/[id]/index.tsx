import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import styles from "./detalhes-jogo.module.css"
import {getJogoById} from "../../api/jogoService";
import {erro} from "@/utils/toast";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";

interface Jogo {
    id: number;
    nome: string;
    imagemUrl: string;
    descricao: string;
    preco: number;
    plataformas: string[];
    categorias: string[];
    classificacaoIndicativa: number;
}

const Detalhes = () => {

    const [jogo, setJogo] = useState<Jogo>();
    const params = useParams();
    const id = params.id;

    async function getJogoId() {
        try {
            const data = await getJogoById(Number(id))
            setJogo(data);
        } catch (error: any) {
            erro(error.message)
        }
    }

    useEffect(() => {
        getJogoId()
    }, [])

    return (
        <>
            <Header></Header>
            <main className={styles.main}>
                <section className={`${styles.conteudo} glass-container container-grid`}>
                    <h1>Detalhes do Jogo</h1>
                    <div className={styles.detalhes_jogo}>
                        <img src={jogo?.imagemUrl} alt=""/>
                        <div className={styles.textos_jogo}>
                            <h2>{jogo?.nome}</h2>
                            <p>{jogo?.descricao}</p>
                        </div>
                    </div>
                    <div className={styles.informacoes_comprar}>
                        <div className={styles.direita}>
                            <p>Classificação indicativa: <span>{jogo?.classificacaoIndicativa} anos</span></p>
                            <p>Preço: <span>{jogo?.preco}</span></p>
                            <ul>Plataformas:
                                {jogo?.plataformas.map((value,) => (
                                    <li key={value}>{value}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.esquerda}>
                            <ul>Gêneros:
                                {jogo?.categorias.map((value) => (
                                    <li key={value}>{value}</li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Detalhes