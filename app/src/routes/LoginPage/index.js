import React, { useState } from "react"
import { useDispatch } from 'react-redux'

import { login } from "../../actions/users"

import * as S from "./styles"

function LoginPage(){
    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState({})

    const getUserInfo = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
    }

    const sendUserInfo = (e) => {
        e.preventDefault()
        dispatch(login(userInfo))
    }

    return (
        <S.Box>
            <S.Logo src="https://user-images.githubusercontent.com/45580434/86478025-fb8a4480-bd1f-11ea-91d0-8121ed11e436.png" alt="logo"/>
            <S.Form onSubmit={sendUserInfo}>
                <S.Label htmlFor="email">Email</S.Label>
                <S.Input type="email" id="email" name="email" value={userInfo.email || ""} onChange={getUserInfo} placeholder="Email"/>

                <S.Label htmlFor="password">Senha</S.Label>
                <S.Input type="password" id="password" name="password" value={userInfo.password || ""} onChange={getUserInfo} placeholder="Senha"/>

                <S.Button type="submit">Entrar</S.Button>
            </S.Form>
        </S.Box>
    )
}

export default LoginPage