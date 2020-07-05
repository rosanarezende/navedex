import styled from "styled-components"

export const HomeWrapper = styled.div`
    margin: 5.5vh 2.5vw;
`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5.5vh;
`

export const Title = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #212121;
`

export const AddButton = styled.button`
    width: 13.75vw;
    background: #212121;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px; 
    color: #FFFFFF;
    border: none;
`

export const NaversWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 58.3vh;
    margin-top: 5vh;
`

export const NaverCard = styled.div`
    height: 52.2vh;
    width: 21.9vw;
    margin-bottom: 6vh;
`

export const NaverImage = styled.div`
    height: 38.9vh;
    width: 21.9vw;
    margin-bottom: 2.2vh;
    cursor: pointer;

    background-image: url(${props => props.image});
    background-color: #cccccc;
    background-position: center top;
    background-repeat: no-repeat; 
    background-size: cover;
    position: relative;
`

export const NaverName = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 0.55vh;
`

export const NaverOccupation = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 1.65vh;
`

export const IcoDelete = styled.img`
    margin-right: 1.25vw;
`
