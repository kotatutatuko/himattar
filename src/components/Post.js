import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { fontSize } from "@material-ui/system";
import HeaderAfterLogin from "./HeaderAfterLogin";

const useStyles = makeStyles(theme => ({
  container: {
    flexWrap: "wrap",
    paddingTop: "0.3rem",
    paddingBottom: "3rem"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
    marginTop: "4rem"
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1),
    marginBottom: "3rem",
    marginLeft: "5%",
    marginRight: "30%"
  },
  input: {
    display: "none"
  },
  title: {
    width: "60%",
    marginLeft: "5%",
    marginRight: "30%",
    height: "10%"
  },
  content: {
    marginTop: "3rem",
    width: "85%",
    marginLeft: "5%",
    marginRight: "30%"
  }
}));

// ログイン状態を監視しログインしていなければログイン画面に飛ばす

const Post = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "User Name",
    password: "Password"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <React.Fragment>
      <HeaderAfterLogin />
      <div className="postbox">
        <p>Post</p>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            className={classes.title}
            id="filled-full-width"
            label="Title"
            margin="normal"
            variant="filled"
          />
          <br />
          <TextField
            id="filled-content"
            label="本文"
            rows="12"
            multiline
            className={classes.content}
            margin="normal"
            variant="filled"
          />
        </form>
        <br />
        <Button variant="outlined" color="secondary" className={classes.button}>
          投稿
        </Button>
        <br />
      </div>
    </React.Fragment >
  );
};

export default Post;
