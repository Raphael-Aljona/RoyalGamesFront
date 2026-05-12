import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./cadastrar-jogo.module.css"
import Btn from "../../components/btn/btn";
import Catalogo from "../../components/catalogo/catalogo";

const CadastrarJogo = () => {
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
                                        <input className={`glass-container`} type="text"/>
                                    </div>
                                    <div className={styles.campos_meio}>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Valor</label>
                                            <input className={`glass-container`} type="text"/>
                                        </div>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Gênero</label>
                                            <select className={`glass-container`} name="" id=""></select>
                                        </div>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Classificação Indicativa</label>
                                            <select className={`glass-container`} name="" id=""></select>
                                        </div>
                                    </div>
                                    <div className={styles.campos_baixo}>
                                        <div className={`${styles.campo_texto}`}>
                                            <label htmlFor="">Plataforma</label>
                                            <select className={`glass-container`} name="" id=""></select>
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
                                        <textarea className={`glass-container`}/>
                                    </div>
                                </div>
                            </div>
                            <Btn>Cadastrar</Btn>
                        </form>
                    </div>

                </section>
                <section className={styles.catalogo}>
                    <div className={`container-grid ${styles.conteudo_catalogo}`}>
                        <h2>Lista de Jogos</h2>
                        <Catalogo></Catalogo>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default CadastrarJogo