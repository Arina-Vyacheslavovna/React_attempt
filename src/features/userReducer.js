import {setCookie,getCookie, deleteCookie} from '../utilsCookie'

export const userReducer = (state = null, action) => {
    switch (action.type) {
        case "login": {
            return action.payload
        }
        case "logout":  
            return null
        default: 
            return state;
    }
}

export const selectUser = (state) => state.user;

export const loginUserAction = (data) => (dispatch) => {
    dispatch({type: "login", payload: data})
    setCookie('name', data.name, {secure: true, 'max-age': 3600})
}

export const logoutUserAction = () => (dispatch) => {
    dispatch({type: "logout"})
    deleteCookie('name')
}

export const getUserAction = () => (dispatch) => {    
    const cookieName = getCookie('name');
    if (cookieName) dispatch({type: "login", payload: {name: cookieName}})
}

// export function selectUser () {
//     return state.user;
// }

// export function getUserAction () {
//     return function (dispatch) {
//         const cookieName = getCookie('name');
//         if (cookieName) dispatch({type: "login", payload: {name: cookieName}})
        
//     }
// }