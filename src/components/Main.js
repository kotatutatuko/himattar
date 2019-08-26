import React from "react";

import HeaderBeforeLogin from "./HeaderBeforeLogin";
import HeaderAfterLogin from "./HeaderAfterLogin"

import PostList from "./PostList";

import firebase from "../firebase"

const Main = () => {
    const user = firebase.auth().currentUser;
    return (
        <React.Fragment>
            {user ? <HeaderAfterLogin /> : <HeaderBeforeLogin />}
            <PostList />
        </React.Fragment>
    );
};

export default Main;
