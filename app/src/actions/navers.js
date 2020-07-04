import axios from 'axios'
import { baseUrl, getToken } from "../utils"
import { setMessage, setOpen } from "./messages"
import { setConfirmOpen } from "./confirm"
import { push } from 'connected-react-router'

export const setNavers = (navers) => ({
    type: "SET_NAVERS",
    payload: {
        navers
    }
})

export const getNavers = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/navers`, {
            headers: {
                authorization: `Bearer ${getToken()}`
            }
        })
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
        const response = await axios.get(`${baseUrl}/navers/${id}`, {
            headers: {
                authorization: `Bearer ${getToken()}`
            }
        })
        dispatch(setNaverById(response.data))
        dispatch(push(`/naver/edit/${id}`))
    }
    catch (err) {
        console.error(err)
    }
}

export const deleteNaver = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`${baseUrl}/navers/${id}`, {
            headers: {
                authorization: `Bearer ${getToken()}`
            }
        })
        console.log(response?.data?.message)
        dispatch(getNavers())
        dispatch(setConfirmOpen(false))
        dispatch(setMessage("Naver excluído", "Naver excluído com sucesso!"))
        dispatch(setOpen(true))
    }
    catch (err) {
        console.error(err)
    }
}

export const createNaver = (info) => async (dispatch) => {
    console.log(info)
    try {
        await axios.post(`${baseUrl}/navers`, info, {
            headers: {
                authorization: `Bearer ${getToken()}`
            }
        })
        dispatch(setMessage("Naver criado", "Naver criado com sucesso!"))
        dispatch(setOpen(true))
    }
    catch (err) {
        console.error(err)
    }
}

export const updateNaver = (id, info) => async (dispatch) => {
    try {
        await axios.put(`${baseUrl}/navers/${id}`, info, {
            headers: {
                authorization: `Bearer ${getToken()}`
            }
        })
        dispatch(getNaverById(id))
        dispatch(setMessage("Naver atualizado", "Naver atualizado com sucesso!"))
        dispatch(setOpen(true))
    }
    catch (err) {
        console.error(err)
    }
}

export const setOpenDetail = (option) => ({
    type: "SET_OPEN_DETAIL",
    payload: {
        option
    }
})

export const setSelectedNaver = (naverId) => ({
    type: "SET_SELECTED_NAVER",
    payload: {
        naverId
    }
})
