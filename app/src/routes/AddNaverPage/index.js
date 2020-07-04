import React from "react"

import Appbar from '../../containers/Appbar'
import CreateEditStructure from "../../containers/CreateEditStructure"

function AddNaverPage() {
    const userInfoStart = {}
    
    return (
        <>
            <Appbar />
            <CreateEditStructure
                title="Adicionar Naver"
                userInfoStart={userInfoStart}
            />
        </>
    )
}

export default AddNaverPage