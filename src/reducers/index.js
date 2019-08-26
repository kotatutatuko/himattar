import { combineReducers } from 'redux';
import RegisterReducer from "./RegisterReducer";

const reducer = combineReducers({
    RegisterReducer: RegisterReducer,
})

export default reducer;
