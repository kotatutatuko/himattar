import Register from "../components/Register";
import { connect } from "react-redux";
import { inputEmail, inputPassword, inputUserName, resetInput } from "../actions/register";
import { withRouter } from "react-router-dom";


const mapStateToProps = (state, historyProps) => {
    return {
        state: state.RegisterReducer,
        history: historyProps.history,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))
