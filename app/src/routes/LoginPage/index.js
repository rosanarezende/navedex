import React from "react"

import * as S from "./styles"

function LoginPage(){

    return (
        <>
        <S.Box>
            <S.Logo 
                src="https://user-images.githubusercontent.com/45580434/86472595-c2e56d80-bd15-11ea-9794-f11f547dc2d3.png"
                alt="logo"
            />
            <S.Form>
                <S.Label for="email">
                    <img src="https://user-images.githubusercontent.com/45580434/86475683-83ba1b00-bd1b-11ea-92d0-474cddd5f7c8.png" alt="email"/>
                </S.Label>
                <S.Input type="email" id="email"/>

                <S.Label for="password">
                    <img src="https://user-images.githubusercontent.com/45580434/86475686-861c7500-bd1b-11ea-925b-6589efdfc96b.png" alt="senha"/>
                </S.Label>
                <S.Input type="password" id="password"/>

                <S.Button>
                    {/* Entrar */}
                    <img src="https://user-images.githubusercontent.com/45580434/86477035-07750700-bd1e-11ea-8df9-08b766481d68.png" alt="entrar"/>
                </S.Button>
            </S.Form>
        </S.Box>
        </>
    )
}

export default LoginPage