export const routes = {
    home: "/",
    login: "/login",
    addNaver: "/naver/add",
    editNaver: "/naver/edit/:id"
}

export const baseUrl = "https://navedex-api.herokuapp.com/v1"

export const getToken = () => localStorage.getItem("token")