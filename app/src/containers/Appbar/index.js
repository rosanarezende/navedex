import React from "react"
import { useDispatch } from "react-redux"
import { push } from "connected-react-router"

import { routes } from "../../utils"

import * as S from "./styles"

function Appbar(){
    const dispatch = useDispatch()
    
    const logout = () => {
        localStorage.clear()
        dispatch(push(routes.login))
    }

    return (
        <S.AppBarWrapper>
            <img src="https://user-images.githubusercontent.com/45580434/86487113-a6582e00-bd33-11ea-9119-a3453f5a20aa.png" alt="logo"/>
            <S.Logout onClick={logout}>Sair</S.Logout>
        </S.AppBarWrapper>
    )
}

export default Appbar