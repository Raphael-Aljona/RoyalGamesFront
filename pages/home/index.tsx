import styles from "./home.module.css"
import Header from "../../components/header/header";
import Btn from "../../components/btn/btn";
import CardJogo from "../../components/card-jogo/card-jogo";
import Catalogo from "../../components/catalogo/catalogo"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Footer from "../../components/footer/footer";

const Index = () => {
    return (
        <>
            <Header></Header>
            <main className={`${styles.main}`}>
                <section className={`${styles.banner}`}>
                    <div className={`container-grid ${styles.conteudo_banner}`}>
                        <div className={styles.texto_banner}>
                            <h1>Conheça nossos jogos!</h1>
                            <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes
                                completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa
                                aqui.</p>
                        </div>
                    </div>
                    <img src="/imgs/Imagem%20Banner.png" alt=""/>
                </section>
                <section className={styles.catalogo}>
                    <h2>Catálogo de jogos</h2>
                    <Catalogo></Catalogo>
                </section>
                <section className={styles.pre_footer}>
                    <div className={`container-grid ${styles.conteudo}`}>
                        <h2>Jogos online podem afetar o comportamento humano?</h2>
                        <div className={`glass-container ${styles.imagem_jogos}`}>
                            <img src="/imgs/lol.png" alt=""/>
                            <img src="/imgs/counter_strike.png" alt=""/>
                        </div>
                        <p> Estudos indicam que jogos podem alterar o comportamento humano… Principalmente quando o time
                            resolve testar sua paciência em plena partida ranqueada.</p>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Index;