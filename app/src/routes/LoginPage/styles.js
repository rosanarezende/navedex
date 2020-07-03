import styled from "styled-components"

export const Box = styled.div`
    position: absolute;
    width: 35vw;
    height: 56.6vh;
    left: 32.5vw;
    top: 21.7vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid #212121;
    box-sizing: border-box;
`

export const Logo = styled.img`
    margin-top: 10%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 55%;
    margin: auto;
`

export const Label = styled.label`
    height: 18px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;

    display: flex;
    align-items: center;


    color: #212121;
    margin-bottom: 1%;
`

export const Input = styled.input`
    height: 17.5%;
    margin-bottom: 8.5%;

    background: #FFFFFF;
    border: 1px solid #424242;
    box-sizing: border-box;
`

export const Button = styled.button`
    height: 17.5%;
    background: #212121;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px; 
    color: #FFFFFF;
    border: none;
`