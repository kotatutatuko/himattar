import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import firebase from "../firebase";
import { isError } from "util";
var kindOfError = "";

const useStyles = makeStyles(theme => ({
  container: {
    flexWrap: "wrap",
    paddingTop: "0.3rem",
    paddingBottom: "3rem",
    textAlign: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
    marginTop: "4rem"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1),
    marginBottom: "3rem"
  },
  input: {
    display: "none"
  },
  error: {
    color: "#f00",
    fontSize: "1rem",
    paddingBottom: "1.5rem"
  }
}));

const Login = ({ state, history, inputEmail, inputPassword, resetInput }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChangePassword = event => {
    inputPassword(event.target.value);
  };

  const handleChangeEmail = event => {
    inputEmail(event.target.value);
  };

  const handleClickLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(state.inputEmail, state.inputPassword)
      .then(() => {
        history.push("/");
        resetInput();
      })
      .catch(error => {
        console.log(error.code);
        console.log(error.message);
        kindOfError = error.code;
      });
  };

  const returnErrorMessage = kindOfError => {
    if (kindOfError === "") {
      return <div className={classes.error}>Error : テストメッセージです</div>;
    } else if (kindOfError === "FIRAuthErrorCodeWrongPassword") {
      return <div className={classes.error}>パスワードが間違っています</div>;
    } else if (kindOfError === "FIRAuthErrorCodeInvalidEmail") {
      return (
        <div className={classes.error}>メールアドレスが間違っています</div>
      );
    }
  };

  return (
    <div className="loginbox">
      <p>Login</p>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Email"
          value={state.inputEmaile}
          onChange={handleChangeEmail}
          className={classes.textField}
          margin="normal"
        />
        <br />
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={state.inputPassword}
            onChange={handleChangePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
      {returnErrorMessage(kindOfError)}
      <Button
        variant="outlined"
        color="secondary"
        className={classes.button}
        onClick={handleClickLogin}
      >
        Login
      </Button>
      <br />
      <Link to="/">メイン</Link>
    </div>
  );
};

export default Login;
