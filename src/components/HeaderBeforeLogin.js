import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import ReturnTiTleAndSearch from "./HeaderCommon";

/* vmin--縦横画面幅のうちの最小をとった%*/

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
    fontSize: "7vmin"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "auto",
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
    width: "7vmin",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  inputbutton: {
    width: "6vmin",
    fontSize: "0.7rem",
    [theme.breakpoints.up("sm")]: {
      width: "12vmin",
      fontSize: "1rem"
    }
  }
}));

const HeaderBeforeLogin = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ReturnTiTleAndSearch value={classes} />

          <Button
            className={classes.inputbutton}
            color="inherit"
            onClick={() => {
              props.history.push("/login");
            }}
          >
            ログイン
          </Button>
          <Button
            className={classes.inputbutton}
            color="inherit"
            onClick={() => {
              props.history.push("/register");
            }}
          >
            新規登録
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(HeaderBeforeLogin);
