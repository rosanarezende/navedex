import React from "react"
import { useDispatch, useSelector } from 'react-redux'

import { setOpen } from '../../actions/messages';

import { Backdrop } from "../../components/Backdrop"
import { MessageWrapper, CloseIcon, MsgText, MsgTitle } from "./styles"

function Message() {
    const dispatch = useDispatch()
    const { open, title, text } = useSelector(state => state.messages)

    const handleClose = () => { dispatch(setOpen(false)) }

    return (
        open &&
        <>
            <Backdrop />
            <MessageWrapper>
                <CloseIcon src="https://user-images.githubusercontent.com/45580434/86485081-2d0a0c80-bd2e-11ea-9892-bb2bd13b8e14.png" alt="close" onClick={handleClose}/>
                <MsgTitle>{title}</MsgTitle>
                <MsgText>{text}</MsgText>
            </MessageWrapper>
        </>
    )
}

export default Message