import * as actionType from "../utils/actionTypes"

export const inputEmail = input => {
    return {
        type: actionType.INPUT_EMAIL_FOR_REGISTER,
        payload: {
            input
        }
    }
}

export const inputPassword= input => {
    return {
        type: actionType.INPUT_PASSWORD_FOR_REGISTER,
        payload: {
            input
        }
    }
}

export const resetInput = () => {
    return {
        type: actionType.RESET_INPUT_FOR_REGISTER
    }
}

export const inputUserName = input => {
    return {
        type: actionType.INPUT_USERNAME_FOR_REGISTER,
        payload: {
            input
        }
    }
}
