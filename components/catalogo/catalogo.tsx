import styles from "./catalogo.module.css"
import CardJogo from "../card-jogo/card-jogo";
import Btn from "../btn/btn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Catalogo = () => {
    return (
        <>
            <div className={`container-grid ${styles.conteudo_lista}`}>
                <div className={`${styles.pesquisa}`}>
                    <input className={`glass-container`} type="text" placeholder="Pesquise..."/>
                    <Btn>Menor Preço</Btn>
                    <select className={`glass-container`} name="" id="">
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
                    <Btn> <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> </Btn>
                    <Btn> 1 </Btn>
                    <Btn> 2 </Btn>
                    <Btn> 3 </Btn>
                    <Btn> 4 </Btn>
                    <Btn> 5 </Btn>
                    <Btn> <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> </Btn>
                </div>
            </div>
        </>
    )
}

export default Catalogo