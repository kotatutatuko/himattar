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
import { Link } from "react-router-dom";

const ReturnTiTleAndSearch = props => {
  return (
    <React.Fragment>
      <Typography variant="h4" color="inherit" className={props.value.title}>
        <Link to="/">Himattar</Link>
      </Typography>

      <div className={props.value.search}>
        <div className={props.value.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: props.value.inputRoot,
            input: props.value.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </React.Fragment>
  );
};

export default ReturnTiTleAndSearch;
