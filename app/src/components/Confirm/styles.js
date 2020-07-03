import styled from "styled-components"

export const ConfirmWrapper = styled.div`
    position: absolute;
    width: 592px;
    height: 233px;
    left: 344px;
    top: 244px;

    background: #FFFFFF;
`

export const ConfirmTitle = styled.div`
    position: absolute;
    width: 163px;
    height: 36px;
    left: 376px;
    top: 276px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    color: #212121;
`

export const ConfirmText = styled.div`
    position: absolute;
    width: 344px;
    height: 36px;
    left: 376px;
    top: 336px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
    /* identical to box height, or 225% */

    display: flex;
    align-items: center;

    color: #212121;
`

export const ButtonCancel = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    border: 1px solid #212121;
`

export const ButtonDelete = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    /* Gray / Gray 900 */

    background: #212121;
`

export const ButtonText = styled.div`
    position: absolute;
    width: 142.6px;
    height: 24px;
    left: calc(50% - 142.6px/2 + 0px);
    top: calc(50% - 24px/2);

    /* Botão */

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;
    text-align: center;

    color: ${props => props.color};

    /* cor color="#212121" color="#FFFFFF"   */

`