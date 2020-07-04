import styled from "styled-components"

export const DetailWrapper = styled.div`
    z-index: 2;
    position: absolute;
    width: 78.6vw;
    height: 69.8vh;
    left: 10.7vw;
    top: 15.1vh;
    background: #FFFFFF;
    display: flex;
`

export const CloseIcon = styled.img`
    position: absolute;
    right: 2%;
    top: 4%;
`

export const Image = styled.img`
    height: 100%;

`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 4.4vh 2.3vw;
`

export const Name = styled.p`
    height: 36px;
    margin-bottom: 1.4vh;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    display: flex;
    align-items: center;

    color: #212121;
`

export const Title = styled.p`
    height: 36px;
    margin-bottom: 1.4vh;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    align-items: center;

    color: #212121;
`

export const SubTitle = styled.p`
    height: 36px;
    margin-bottom: 3.3vh;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;

    display: flex;
    align-items: center;

    color: #212121;
`

export const IconDelete = styled.img`
    margin-right: 1.25vw;
`