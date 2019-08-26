import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { keys } from "@material-ui/core/styles/createBreakpoints";

import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "2rem",
    marginBottom: "2rem",
    marginRight: "15%",
    marginLeft: "15%"
  },
  username: {
    fontSize: "1rem",
    font: "500"
  },
  date: {
    marginTop: "0.2rem",
    fontSize: "0.7rem"
  },
  title: {
    marginTop: "0.5rem",
    fontSize: "2.5rem",
    font: "800"
  },
  content: {
    fontSize: "1.6rem",
    marginTop: "1.5rem",
    font: "600"
  }
}));

/*
My assumption...
first--Username
second--date
third--title
forth--content
*/

const PostCard = props => {
  const classes = useStyles();
  return (
    <div className="mainbox">
      <Paper className={classes.root}>
        <Typography variant="p" component="p" className={classes.username}>
          {props.value[0]}
        </Typography>
        <Typography variant="p" component="p" className={classes.date}>
          {props.value[1]}
        </Typography>
        <Typography variant="p" component="h3" className={classes.title}>
          {props.value[2]}
        </Typography>
        <Typography variant="p" component="p" className={classes.content}>
          {props.value[3]}
        </Typography>
      </Paper>
    </div>
  );
};

export default PostCard;
