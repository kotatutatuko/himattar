import React from "react";

import HeaderBeforeLogin from "./components/HeaderBeforeLogin";
import HeaderAfterLogin from "./components/HeaderAfterLogin"

import PostList from "./components/PostList";
import Login from "./containers/Login";
import Register from "./containers/Register";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Main from "./components/Main"

import { Route, Switch } from "react-router-dom";
import "./App.css";

import firebase from "./firebase"



const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/post" component={Post} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
    );
};

export default App;
