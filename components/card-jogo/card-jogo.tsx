import Btn from "../btn/btn";
import styles from "./card-jogo.module.css"

const CardJogo = () => {
    return (
        <>
            <article className={styles.conteudo_card}>
                <img src="/imgs/card-cod.png" alt=""/>
                <h2>Call of Duty</h2>
                <p>R$ 70,00</p>
                <Btn>Detalhes</Btn>
            </article>
        </>
    )
}
export default CardJogo