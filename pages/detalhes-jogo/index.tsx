import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./detalhes-jogo.module.css"

const Detalhes = () => {
    return (
        <>
            <Header></Header>
            <main className={styles.main}>
                <section className={`${styles.conteudo} glass-container container-grid`}>
                    <h1>Detalhes do Jogo</h1>
                    <div className={styles.detalhes_jogo}>
                        <img src="/imgs/card-cod.png" alt=""/>
                        <div className={styles.textos_jogo}>
                            <h2>Call of Duty</h2>
                            <p>League of Legends (LoL) é um jogo eletrônico do gênero MOBA (Multiplayer Online Battle
                                Arena) onde duas equipes de cinco jogadores competem entre si com o objetivo de destruir
                                a base adversária. Cada jogador controla um campeão com habilidades únicas, exigindo
                                estratégia, trabalho em equipe e tomada de decisões rápidas durante as partidas.

                                O jogo possui diversos modos, mapas e estilos de jogo, além de oferecer atualizações
                                frequentes com novos personagens, eventos e ajustes de balanceamento. League of Legends
                                é conhecido pelo seu cenário competitivo mundial, reunindo milhões de jogadores e
                                campeonatos profissionais ao redor do mundo.</p>
                        </div>
                    </div>
                    <div className={styles.informacoes_comprar}>
                        <div className={styles.direita}>
                            <p>Classificação indicativa: <span>18 anos</span></p>
                            <p>Preço: <span>R$ 100,00</span></p>
                            <p>Plataformas: <span></span></p>
                        </div>
                        <div className={styles.esquerda}>
                            <p>Categorias: <span></span></p>
                            <p>Gêneros: <span></span></p>
                        </div>

                    </div>

                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Detalhes