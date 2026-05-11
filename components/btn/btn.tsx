import styles from "./btn.module.css"
import {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    onclick?: () => void ;
}

const Btn = ({children, onclick}: ButtonProps) => {
    return (
        <button onClick={onclick} className={styles.botao} type="submit">
            {children}
        </button>
    )
}

export default Btn