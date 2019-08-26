import * as actionType from "../utils/actionTypes"

const initialState = {
    inputEmail: "",
    inputPassword: "",
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INPUT_EMAIL_FOR_LOGIN:
            return {
                ...state,
                inputEmail: action.payload.input,
            }
        case actionType.INPUT_PASSWORD_FOR_LOGIN:
            return {
                ...state,
                inputPassword: action.payload.input,
            }
        case actionType.RESET_INPUT_FOR_LOGIN:
            return {
                ...state,
                inputEmail: "",
                inputPassword: "",
            }
        default:
            return state;
    }
}

export default LoginReducer;
