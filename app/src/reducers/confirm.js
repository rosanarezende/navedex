const initialState = {
    open: false,
    title: "",
    text: ""
}

const confirm = (state = initialState, action) => {

    switch (action.type) {
        
        case "SET_CONFIRM_OPEN":
            return {
                ...state,
                open: action.payload.option
            }

        case "SET_CONFIRM_MESSAGE":
            return {
                ...state,
                title:action.payload.title,
                text: action.payload.text
            }

        default:
            return state;
    }
}

export default confirm