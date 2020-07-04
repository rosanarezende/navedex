import React from "react"
import { useDispatch } from 'react-redux'
import * as moment from 'moment'

import { setOpenDetail } from "../../actions/navers"

import { Backdrop } from "../../components/Backdrop"
import IconDelete from "../../components/IconDelete"
import IconEdit from "../../components/IconEdit"

import * as S from "./styles"

function NaverDetail(props) {
    const dispatch = useDispatch()
    const { naverDetail } = props

    const today = moment()
    const birthdate = naverDetail?.birthdate
    const age = today.diff(birthdate, "years")

    const admissionDate = naverDetail?.admission_date
    const companyYears = today.diff(admissionDate, "years")
    const companyMonths = today.diff(admissionDate, "months") % 12
    let years
    if (companyYears === 0) years = ""
    if (companyYears === 1) years = "1 ano e "
    if (companyYears > 1) years = `${companyYears} anos e `
    let months
    if (companyMonths === 0) months = ""
    if (companyMonths > 0) months = `${companyMonths} meses`

    const handleClose = () => { dispatch(setOpenDetail(false)) }

    return (
        <>
            <Backdrop />
            <S.DetailWrapper>
                <S.CloseIcon src="https://user-images.githubusercontent.com/45580434/86485081-2d0a0c80-bd2e-11ea-9892-bb2bd13b8e14.png" alt="close" onClick={handleClose} />
                <S.Image alt="naver image" src={naverDetail?.url} />
                <S.InfoWrapper>
                    <div>
                        <S.Name>{naverDetail?.name}</S.Name>
                        <S.SubTitle>{naverDetail?.job_role}</S.SubTitle>
                        <S.Title>Idade</S.Title>
                        <S.SubTitle>{age} anos</S.SubTitle>
                        <S.Title>Tempo de empresa</S.Title>
                        <S.SubTitle>{years} {months}</S.SubTitle>
                        <S.Title>Projetos que participou</S.Title>
                        <S.SubTitle>{naverDetail?.project}</S.SubTitle>
                    </div>
                    <div>
                        <IconDelete id={naverDetail?.id}/>
                        <IconEdit id={naverDetail?.id}/>
                    </div>
                </S.InfoWrapper>
            </S.DetailWrapper>
        </>
    )
}

export default NaverDetail