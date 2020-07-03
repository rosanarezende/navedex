import styled from "styled-components"

// export const Backdrop = styled.div`
//     z-index: 1;
//     position: absolute;
//     /* position: fixed; */
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     top: 0;
//     left: 0;
// `

export const MessageWrapper = styled.div`
    z-index: 2;
    position: absolute;
    width: 592px;
    height: 160px;
    left: 344px;
    top: 265px;
    background: #FFFFFF;
`

export const CloseIcon = styled.div`
    position: absolute;
    left: 69.77%;
    right: 29.14%;
    top: 40.83%;
    bottom: 57.22%;
    background: #212121;
`

export const MsgTitle = styled.div`
    position: absolute;
    width: 183px;
    height: 36px;
    left: 376px;
    top: 297px;

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

export const MsgText = styled.div`
    position: absolute;
    width: 230px;
    height: 36px;
    left: 376px;
    top: 357px;

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