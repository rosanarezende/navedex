import React from "react"
import { useSelector } from 'react-redux'
import * as moment from 'moment'

import Appbar from '../../containers/Appbar'
import CreateEditStructure from "../../containers/CreateEditStructure"

function EditNaverPage(){
    const { naver } = useSelector(state => state.navers)
    const userInfoStart = {
        ...naver,
        admission_date: moment(naver.admission_date).format('YYYY-MM-DD'),
        birthdate: moment(naver.birthdate).format('YYYY-MM-DD')
    }
    
    return (
        <>
            <Appbar />
            <CreateEditStructure
                title="Editar Naver"
                userInfoStart={userInfoStart}
            />
        </>
    )
}

export default EditNaverPage