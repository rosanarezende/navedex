import React from "react"
import { useDispatch, useSelector } from 'react-redux'

import { deleteNaver, setOpenDetail } from "../../actions/navers"
import { setConfirmOpen } from "../../actions/confirm"

import { Backdrop } from "../../components/Backdrop"
import * as S from "./styles"

function Confirm() {
    const dispatch = useDispatch()
    const { open, title, text } = useSelector(state => state.confirm)
    const { selectedNaver } = useSelector(state => state.navers)

    const handleClose = () => { 
        dispatch(setConfirmOpen(false))
    }

    const handleDelete = () => { 
        dispatch(deleteNaver(selectedNaver)) 
        dispatch(setOpenDetail(false))
    }

    return (
        open &&
        <>
            <Backdrop />
            <S.ConfirmWrapper>
                <S.ConfirmTitle>{title}</S.ConfirmTitle>
                <S.ConfirmText>{text}</S.ConfirmText>
                <S.ConfirmButtons>
                    <S.ButtonCancel onClick={handleClose}>
                        Cancelar
                    </S.ButtonCancel>
                    <S.ButtonDelete onClick={handleDelete}>
                        Excluir
                    </S.ButtonDelete>
                </S.ConfirmButtons>
            </S.ConfirmWrapper>
        </>
    )
}


export default Confirm