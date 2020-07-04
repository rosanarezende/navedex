const initialState = {
    allNavers: [],
    naver: {},
    detailsOpen: false,
    selectedNaver: ""
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
                naver: action.payload.naver
            }

        case "SET_OPEN_DETAIL":
            return {
                ...state,
                detailsOpen: action.payload.option
            }

        case "SET_SELECTED_NAVER":
            return {
                ...state,
                selectedNaver: action.payload.naverId
            }

        default:
            return state;
    }
}

export default navers