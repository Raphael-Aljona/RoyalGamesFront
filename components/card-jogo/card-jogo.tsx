import Btn from "../btn/btn";
import styles from "./card-jogo.module.css"
import {router} from "next/client";

const CardJogo = () => {
    return (
        <>
            <article className={`glass-container ${styles.conteudo_card}`}>
                <img src="/imgs/card-cod.png" alt=""/>
                <h2>Call of Duty</h2>
                <p>R$ 70,00</p>
                <Btn onclick={() => {
                    router.push("/detalhes-jogo")
                }}>Detalhes</Btn>
            </article>
        </>
    )
}
export default CardJogo