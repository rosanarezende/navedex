import React from "react"
import { useDispatch } from 'react-redux'

import { setSelectedNaver } from "../../actions/navers"
import { setConfirmMessage, setConfirmOpen } from "../../actions/confirm"

function IconDelete(props) {
    const dispatch = useDispatch()
    const { id } = props

    const onDeleteNaver = (naverId) => {
        dispatch(setSelectedNaver(naverId))
        dispatch(setConfirmMessage("Excluir Naver", "Tem certeza que deseja excluir este Naver?"))
        dispatch(setConfirmOpen(true))
    }

    return (
        <img
            src="https://user-images.githubusercontent.com/45580434/86491872-706e7600-bd42-11ea-8275-c2cc53cbacd0.png"
            alt="delete"
            onClick={() => onDeleteNaver(id)}
            style={{marginRight: "1.25vw"}}
        />
    )
}

export default IconDelete