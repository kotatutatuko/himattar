import Login from "../components/Login";
import { connect } from "react-redux";
import { inputEmail, inputPassword, resetInput } from "../actions/login";
import { withRouter } from "react-router-dom";


const mapStateToProps = (state, historyProps) => {
    return {
        state: state.LoginReducer,
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
        resetInput() {
            dispatch(resetInput())
        },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
