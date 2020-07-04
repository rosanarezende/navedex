import React, {useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { push } from "connected-react-router"

import { routes } from "../../utils"
import { setOpenDetail, getNavers } from "../../actions/navers"

import Appbar from '../../containers/Appbar'
import NaverDetail from "../../containers/NaverDetail"

import * as S from "./styles"
import IconDelete from "../../components/IconDelete"
import IconEdit from "../../components/IconEdit"

function HomePage() {
    const dispatch = useDispatch()
    const { detailsOpen, allNavers } = useSelector(state => state.navers)
    const [naverDetail, setNaverDetail] = useState("")
    
    useEffect(() => {
        dispatch(getNavers())
    }, [dispatch])

    const onClickDetail = (naver) => {
        dispatch(setOpenDetail(true))
        setNaverDetail(naver)
    }

    return (
        <>
            <Appbar />
            <S.HomeWrapper>
                <S.Top>
                    <S.Title>Navers</S.Title>
                    <S.AddButton onClick={() => dispatch(push(routes.addNaver))}>
                        Adicionar Naver
                    </S.AddButton>
                </S.Top>
                <S.NaversWrapper>
                    {allNavers.map(naver => (
                        <S.NaverCard key={naver.id}>
                            <S.NaverImage 
                                image={naver.url}
                                alt="naver image"
                                onClick={() => onClickDetail(naver)}
                            />
                            <S.NaverName>{naver.name}</S.NaverName>
                            <S.NaverOccupation>{naver.job_role}</S.NaverOccupation>
                            <div>
                                <IconDelete id={naver.id}/>
                                <IconEdit id={naver.id}/>
                            </div>
                        </S.NaverCard>
                    ))}
                </S.NaversWrapper>
            </S.HomeWrapper>
            {detailsOpen && <NaverDetail naverDetail={naverDetail}/>}
        </>
    )
}

export default HomePage