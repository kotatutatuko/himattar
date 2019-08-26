import React from "react";

import HeaderBeforeLogin from "./components/HeaderBeforeLogin";
import HeaderAfterLogin from "./components/HeaderAfterLogin"
import PostList from "./components/PostList";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Post from "./components/Post";

import { Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => (
  <React.Fragment>
    <HeaderBeforeLogin />
    <Switch>
      <Route exact path="/" component={PostList} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/post" component={Post} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default App;
