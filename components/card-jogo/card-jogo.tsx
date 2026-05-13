import Btn from "../btn/btn";
import styles from "./card-jogo.module.css"
import {router} from "next/client";

type Jogo = {
    jogoID: number;
    nome: string;
    imagem: string;
    preco: number;
}

const CardJogo = ({nome, jogoID, preco, imagem}:Jogo) => {
    // {imagem.length < 0 ? "/imgs/card-cod.png" : "imagem real"}
    return (
        <>
            <article className={`glass-container ${styles.conteudo_card}`}>
                <img src="/imgs/card-cod.png" alt=""/>
                <h2>{nome}</h2>
                <p>{preco}</p>
                <Btn onclick={() => {
                    router.push("/detalhes-jogo")
                }}>Detalhes</Btn>
            </article>
        </>
    )
}
export default CardJogo