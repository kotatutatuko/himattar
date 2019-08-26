import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import { inputPassword } from "../actions/register";

const useStyles = makeStyles(theme => ({
  container: {
    flexWrap: "wrap",
    paddingTop: "0rem",
    paddingBottom: "2rem",
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
  }
}));

const Register = ({state, inputEmail, inputPassword, inputUserName, resetInput}) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
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
  }

  const handleChangeEmail = event => {
    inputEmail(event.target.value)
  }

  const handleChangeUserName = event => {
    inputUserName(event.target.value)
  }

  console.log(state)

  return (
    <div className="registerbox">
      <p>新規登録</p>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="User Name"
          className={classes.textField}
          margin="normal"
          value={state.inputUserName}
          onChange={handleChangeUserName}
        />
        <br />
        <TextField
          id="standard-adress"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          margin="normal"
          autoComplete="email"
          value={state.inputEmail}
          onChange={handleChangeEmail}
        />
        <br />
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={values.showPassword ? "text" : "password"}
            onChange={handleChangePassword}
            value={state.inputPassword}
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
      <Button variant="outlined" color="secondary" className={classes.button}>
        登録
      </Button>
      <br />
      <Link to="/">メイン</Link>
    </div>
  );
};

export default Register;
