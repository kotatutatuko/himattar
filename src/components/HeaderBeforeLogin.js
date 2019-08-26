import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import ReturnTiTleAndSearch from "./HeaderCommon";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "0rem"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    marginTop: "0",
    fontSize: "3rem"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "0%",
    [theme.breakpoints.up("sm")]: {
      width: 0,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const HeaderBeforeLogin = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ReturnTiTleAndSearch value={classes} />
          <Button color="inherit" onClick={() => {props.history.push("/login")}}>ログイン</Button>
          <Button color="inherit" onClick={() => {props.history.push("/register")}}>新規登録</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(HeaderBeforeLogin);
