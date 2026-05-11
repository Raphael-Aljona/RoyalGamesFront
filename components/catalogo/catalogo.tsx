import styles from "./catalogo.module.css"
import CardJogo from "../card-jogo/card-jogo";
import Btn from "../btn/btn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Catalogo = () => {
    return (
        <>
            <div className={`container-grid ${styles.conteudo_lista}`}>
                <div className={`${styles.pesquisa}`}>
                    <input type="text" placeholder="Pesquise..."/>
                    <Btn>Menor Preço</Btn>
                    <select name="" id="">
                        <option value="" >Categoria</option>
                    </select>
                </div>
                <div className={styles.lista_jogos}>
                    <CardJogo></CardJogo>
                    <CardJogo></CardJogo>
                    <CardJogo></CardJogo>
                    <CardJogo></CardJogo>
                    <CardJogo></CardJogo>
                    <CardJogo></CardJogo>
                    <CardJogo></CardJogo>
                    <CardJogo></CardJogo>
                </div>
                <div className={styles.paginas}>
                    <Btn> a </Btn>
                    <Btn> 1 </Btn>
                    <Btn> 2 </Btn>
                    <Btn> 3 </Btn>
                    <Btn> 4 </Btn>
                    <Btn> 5 </Btn>
                    <Btn> b </Btn>
                </div>
            </div>
        </>
    )
}

export default Catalogo