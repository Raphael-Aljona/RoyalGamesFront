import {api} from "./api";
import secureLocalStorage from "react-secure-storage";

export async function Autenticar(email: string, senha: string) {

    try {
        const response = await api.post("Autenticacao/login", {
            email,
            senha
        })

        const token = response.data.token;

        secureLocalStorage.setItem("token", token);
    } catch (error) {
        throw new Error("Email ou senha incorretos")
    }
}