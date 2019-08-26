import { combineReducers } from 'redux';
import RegisterReducer from "./RegisterReducer";
import LoginReducer from "./LoginReducer";

const reducer = combineReducers({
    RegisterReducer: RegisterReducer,
    LoginReducer: LoginReducer,
})

export default reducer;
