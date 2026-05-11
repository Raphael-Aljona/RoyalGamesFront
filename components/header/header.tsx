import styles from "./header.module.css"
import Btn from "../btn/btn";
import {router} from "next/client";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.navegacao} container-grid`}>
                    <img src="/imgs/Logo%20Header.png" alt=""/>
                    <div className={styles.botoes}>
                        <a href="">Catálogo</a>
                        <Btn onclick={() => {
                            router.push("/login")
                        }} >Login</Btn>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;