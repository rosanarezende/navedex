import React from "react"
import { useDispatch } from 'react-redux'

import { setOpenDetail, getNaverById } from "../../actions/navers"

function IconEdit(props) {
    const dispatch = useDispatch()
    const { id } = props

    const onEditNaver = (naverId) => {
        dispatch(setOpenDetail(false))
        dispatch(getNaverById(naverId))
    }

    return (
        <img
            src="https://user-images.githubusercontent.com/45580434/86491873-7401fd00-bd42-11ea-9d6a-72b2abd78bb2.png"
            alt="edit"
            onClick={() => onEditNaver(id)}
        />
    )
}

export default IconEdit