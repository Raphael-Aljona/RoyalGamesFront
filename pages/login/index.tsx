import styles from "./login.module.css"
import Btn from "../../components/btn/btn";
import {useState} from "react";
import {Autenticar} from "../api/authService";
import {erro, notificacao} from "@/utils/toast";
import {router} from "next/client";

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await Autenticar(email, senha)
            notificacao("Logado com sucesso!");
            setTimeout(() => {
                router.push("/cadastrar-jogo")

            }, 2000)
        } catch (err: any) {
            erro(err.message);
        }
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.imagem_lateral}>
                    <img src="/imgs/mulher%20login.png" alt=""/>
                </div>
                <div className={`glass-container ${styles.form_login}`}>
                    <img className={styles.logo} src="/imgs/Logo%20Header.png" alt=""/>
                    <form onSubmit={login} className={styles.campos_login} action="">
                        <div className={styles.campo_texto}>
                            <label htmlFor="">Email</label>
                            <input value={email} onChange={event => {
                                setEmail(event.target.value);
                            }} type="text"/>
                        </div>
                        <div className={styles.campo_texto}>
                            <label htmlFor="">Senha</label>
                            <input value={senha} onChange={event => {
                                setSenha(event.target.value);
                            }} type="password"/>
                        </div>
                        <Btn>Entrar</Btn>
                    </form>
                </div>

            </main>
        </>
    )
}

export default Login