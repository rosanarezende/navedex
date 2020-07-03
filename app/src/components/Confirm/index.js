import React, { useState } from "react"
import { useDispatch } from 'react-redux'

import { deleteNaver } from "../../actions/navers"

import { Backdrop } from "../Backdrop"
import { ConfirmWrapper, ConfirmTitle, ConfirmText, ButtonCancel, ButtonDelete, ButtonText } from "./styles"

function Confirm(props) {
    const dispatch = useDispatch()
    const { open, title, text, id } = props
    const [option, setOption] = useState(open)

    const handleClose = () => { setOption(false) }

    const handleDelete = () => { dispatch(deleteNaver(id)) }

    return (
        option &&
        <>
            <Backdrop />
            <ConfirmWrapper>
                <ConfirmTitle>{title}</ConfirmTitle>
                <ConfirmText>{text}</ConfirmText>
                <ButtonCancel onClick={handleClose}>
                    <ButtonText color="#212121">Cancelar</ButtonText>
                </ButtonCancel>
                <ButtonCancel onClick={handleDelete}>
                    <ButtonText color="#FFFFFF">Excluir</ButtonText>
                </ButtonCancel>
            </ConfirmWrapper>
        </>
    )
}

export default Confirm