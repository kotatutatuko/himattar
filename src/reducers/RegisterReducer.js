import * as actionType from "../utils/actionTypes"

const initialState = {
    inputEmail: "",
    inputPassword: "",
    inputUserName: "",
}

const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INPUT_EMAIL_FOR_REGISTER:
            return {
                ...state,
                inputEmail: action.payload.input,
            }
        case actionType.INPUT_PASSWARD_FOR_REGISTER:
            return {
                ...state,
                inputPassword: action.payload.input,
            }
        case actionType.INPUT_USERNAME_FOR_REGISTER:
            return {
                ...state,
                inputUserName: action.payload.input,
            }
        case actionType.RESET_INPUT_FOR_REGISTER:
            return {
                ...state,
                inputEmail: "",
                inputPassword: "",
            }
        default:
            return state;
    }
}

export default RegisterReducer;
