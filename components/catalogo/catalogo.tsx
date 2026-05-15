import styles from "./catalogo.module.css"
import CardJogo from "../card-jogo/card-jogo";
import Btn from "../btn/btn";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Header from "../header/header";
import {getJogos} from "../../pages/api/jogoService";
import {erro} from "@/utils/toast";
import {useEffect, useState} from "react";

interface Jogo {
    nome: string;
    jogoID: number;
    imagemUrl: string;
    descricao: string;
    preco: number;
}

const Catalogo = () => {

    const [lista, setLista] = useState<Jogo[]>([]);

    async function getListaJogos() {
        try {
            const data = await getJogos();

            await setLista(data);
        } catch (e: any) {
            erro(e)
        }
    }

    useEffect(
        () => {
            getListaJogos();
        }, [])

    return (
        <>
            <div className={`container-grid ${styles.conteudo_lista}`}>
                <div className={`${styles.pesquisa}`}>
                    <input className={`glass-container`} type="text" placeholder="Pesquise..."/>
                    <Btn>Menor Preço</Btn>
                    <select className={`glass-container`} name="" id="">
                        <option value="">Categoria</option>
                    </select>
                </div>
                <div className={styles.lista_jogos}>

                    {lista.map(
                        (value, ) => (

                            <CardJogo key={value.jogoID}
                                      jogoID={value.jogoID}
                                      nome={value.nome}
                                      preco={value.preco}
                                      imagemUrl={value.imagemUrl}></CardJogo>
                        )
                    )}
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