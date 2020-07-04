import styled from "styled-components"

export const MessageWrapper = styled.div`
    z-index: 2;
    position: absolute;
    width: 47vw;
    height: 23vh;
    left: 26.5vw;
    top: 38.5vh;
    background: #FFFFFF;
`

export const CloseIcon = styled.img`
    position: absolute;
    right: 5%;
    top: 18%;
`


export const MsgTitle = styled.p`
    position: absolute;
    height: 36px;
    left: 5%;
    top: 20%;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    display: flex;
    align-items: center;

    color: #212121;
`

export const MsgText = styled.p`
    position: absolute;
    height: 36px;
    left: 5%;
    top: 57.5%;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;

    display: flex;
    align-items: center;

    color: #212121;
`