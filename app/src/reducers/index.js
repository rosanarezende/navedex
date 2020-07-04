import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import messages from "./messages"
import navers from "./navers"
import confirm from "./confirm"

export const generateReducers = history =>
    combineReducers({
        router: connectRouter(history),
        messages,
        navers,
        confirm
})