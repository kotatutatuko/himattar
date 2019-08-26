import Register from "../components/Register";
import { connect } from "react-redux";
import { inputEmail, inputPassword, inputUserName, resetInput } from "../actions/register";


const mapStateToProps = state => {
    return {
        state: state.RegisterReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        inputEmail(input) {
            dispatch(inputEmail(input))
        },
        inputPassword(input) {
            dispatch(inputPassword(input))
        },
        inputUserName(input) {
            dispatch(inputUserName(input))
        },
        resetInput() {
            dispatch(resetInput())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
