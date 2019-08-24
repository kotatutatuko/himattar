import React from "react";

import Header from "./components/Header";
import PostList from "./components/PostList";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

import { Route, Switch } from "react-router-dom";

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={PostList} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default App;
