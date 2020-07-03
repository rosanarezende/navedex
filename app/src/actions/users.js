import axios from 'axios'
import { push } from 'connected-react-router'
import { baseUrl, routes } from "../utils"
import { setMessage, setOpen } from "./messages"

export const login = loginData => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/users/login`, loginData)
        console.log(response) // apagar
        const token = response.data.token      
        localStorage.setItem("token", token)
        dispatch(push(routes.home))
    } catch (err) {
        console.error(err?.response)
        dispatch(setMessage("Erro", "Não foi possivel fazer o login, tente novamente mais tarde!"))
        dispatch(setOpen(true))
    }
}
