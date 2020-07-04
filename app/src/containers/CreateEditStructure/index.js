import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { push } from "connected-react-router"
import * as moment from 'moment'

import { createNaver, updateNaver } from "../../actions/navers"
import { routes } from "../../utils"

import * as S from "./styles"

function CreateEditStructure(props){
    const dispatch = useDispatch()
    const { title, userInfoStart } = props
    const [userInfo, setUserInfo] = useState(userInfoStart)

    const inputs = [
        { name: "name", title: "Nome", type: "text" },
        { name: "job_role", title: "Cargo", type: "text" },
        { name: "birthdate", title: "Idade", type: "date" },
        { name: "admission_date", title: "Tempo de empresa", type: "date" },
        { name: "project", title: "Projetos que participou", type: "text" },
        { name: "url", title: "Url da foto do Naver", type: "text" }
    ]

    const getUserInfo = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
    }

    const sendUserInfo = (e) => {
        e.preventDefault()
        const infoFormated = {
            admission_date: moment(userInfo.admission_date).format('DD/MM/YYYY'),
            birthdate: moment(userInfo.birthdate).format('DD/MM/YYYY'),
            job_role: userInfo.job_role,
            name: userInfo.name,
            project: userInfo.project,
            url: userInfo.url
        }
        if(title === "Adicionar Naver"){
            dispatch(createNaver(infoFormated))
        } else if(title === "Editar Naver"){
            dispatch(updateNaver(userInfoStart?.id, infoFormated))
        }
        setUserInfo({})
    }    

    return (
        <>
        <S.CESWrapper>
                <S.CESTop>
                    <img src="https://user-images.githubusercontent.com/45580434/86501045-df13f980-bd6b-11ea-898f-041e7bf6fd33.png" alt="voltar" 
                        onClick={() => dispatch(push(routes.home))}
                    />
                    <S.CESTitle>{title}</S.CESTitle>
                </S.CESTop>
                <form onSubmit={sendUserInfo}>
                    <S.CESFormWrapper>
                        {inputs.map(input => (
                            <S.CESInputsWrapper key={input.name}>
                                <S.CESLabel htmlFor={input.name}>
                                    {input.title}
                                </S.CESLabel>
                                <S.CESInput 
                                    required
                                    type={input.type}
                                    id={input.name}
                                    name={input.name}
                                    value={userInfo[input.name] || ""}
                                    onChange={getUserInfo}
                                    placeholder={input.title}
                                />
                            </S.CESInputsWrapper>
                        ))}
                    </S.CESFormWrapper>
                    <S.CESButtonWrapper>
                        <S.CESButton type="submit">Salvar</S.CESButton>
                    </S.CESButtonWrapper>
                </form>

            </S.CESWrapper>
        </>
    )
}

export default CreateEditStructure