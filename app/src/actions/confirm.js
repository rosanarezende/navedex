export const setConfirmOpen = (option) => ({
    type: "SET_CONFIRM_OPEN",
    payload: {
        option
    }
})

export const setConfirmMessage = (title, text) => ({
    type: "SET_CONFIRM_MESSAGE",
    payload: {
        title,
        text
    }
})