import React from "react"
import { useDispatch, useSelector } from 'react-redux'

import { setOpen } from '../../actions/messages';

import { Backdrop } from "../Backdrop"
import { MessageWrapper, CloseIcon, MsgText, MsgTitle } from "./styles"


function Message() {
    const { open, title, text } = useSelector(state => state.messages)
    const dispatch = useDispatch()

    const handleClose = () => { dispatch(setOpen(false)) }

    return (
        open &&
        <>
            <Backdrop />
            <MessageWrapper>
                <CloseIcon onClick={handleClose}>X</CloseIcon>
                <MsgTitle>{title}</MsgTitle>
                <MsgText>{text}</MsgText>
            </MessageWrapper>
        </>
    )
}

export default Message