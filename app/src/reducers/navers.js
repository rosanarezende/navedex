const initialState = {
    allNavers: [],
    naver: {}
}

const navers = (state = initialState, action) => {

    switch (action.type) {
        
        case "SET_NAVERS":
            return {
                ...state,
                allNavers: action.payload.navers
            }

        case "SET_NAVER_BY_ID":
            return {
                ...state,
                naver:action.payload.naver
            }

        default:
            return state;
    }
}

export default navers