import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import messages from "./messages"
import navers from "./navers"

export const generateReducers = history =>
    combineReducers({
        router: connectRouter(history),
        messages,
        navers
})