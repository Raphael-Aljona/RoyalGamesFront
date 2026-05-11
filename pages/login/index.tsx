import styles from "./login.module.css"
import Btn from "../../components/btn/btn";
import {useState} from "react";

const Login = () => {


    return (
        <>
            <main className={styles.main}>
                <div className={styles.imagem_lateral}>
                    <img src="/imgs/mulher%20login.png" alt=""/>
                </div>
                <div className={styles.form_login}>
                    <img className={styles.logo} src="/imgs/Logo%20Header.png" alt=""/>
                    <form className={styles.campos_login} action="">
                        <div className={styles.campo_texto}>
                            <label htmlFor="">Email</label>
                            <input type="text"/>
                        </div>
                        <div className={styles.campo_texto}>
                            <label htmlFor="">Senha</label>
                            <input type="password"/>
                        </div>
                        <Btn></Btn>
                    </form>
                </div>

            </main>
        </>
    )
}

export default Login