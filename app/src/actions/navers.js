import axios from 'axios'
import { baseUrl } from "../utils"
import { setMessage, setOpen } from "./messages"

export const setNavers = (navers) => ({
    type: "SET_NAVERS",
    payload: {
        navers
    }
})

export const getNavers = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/navers`)
        dispatch(setNavers(response.data))
    }
    catch (err) {
        console.error(err)
    }
}

export const setNaverById = (naver) => ({
    type: "SET_NAVER_BY_ID",
    payload: {
        naver
    }
})

export const getNaverById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/navers/${id}`)
        dispatch(setNaverById(response.data))
    }
    catch (err) {
        console.error(err)
    }
}

export const deleteNaver = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`${baseUrl}/navers/${id}`)
        console.log(response) // apagar
        dispatch(deleteNaver(response.data))
        dispatch(setMessage("Naver excluído", "Naver excluído com sucesso!"))
        dispatch(setOpen(true))
    }
    catch (err) {
        console.error(err)
    }
}

export const createNaver = (info) => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}/navers`, info)
        dispatch(setMessage("Naver criado", "Naver criado com sucesso!"))
        dispatch(setOpen(true))
    }
    catch (err) {
        console.error(err)
    }
}

export const updateNaver = (id, info) => async (dispatch) => {
    try {
        await axios.put(`${baseUrl}/navers/${id}`, info)
        dispatch(getNaverById(id))
        dispatch(setMessage("Naver atualizado", "Naver atualizado com sucesso!"))
        dispatch(setOpen(true))
    }
    catch (err) {
        console.error(err)
    }
}


