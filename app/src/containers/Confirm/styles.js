import styled from "styled-components"

export const ConfirmWrapper = styled.div`
    z-index: 3;
    position: absolute;
    width: 47vw;
    height: 30vh;
    left: 26.5vw;
    top: 33.9vh;
    background: #FFFFFF;
    padding: 4.4vh 2.5vw;
`

export const ConfirmTitle = styled.div`   
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 3.3vh;
    display: flex;
    align-items: center;
    color: #212121;
`

export const ConfirmText = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
    margin-bottom: 4.5vh;
    display: flex;
    align-items: center;
    color: #212121;
`

export const ConfirmButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

export const ButtonCancel = styled.div`
    width: 13.75vw;
    height: 5.5vh;
    border: 1px solid #212121;
    margin-right: 1.8vw;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
`

export const ButtonDelete = styled.div`
    width: 13.75vw;
    height: 5.5vh;
    background: #212121;
    color:  #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
`