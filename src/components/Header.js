import React from "react";

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <React.Fragment>
            Header
            <Link to="/login">ログイン</Link>
            <Link to="/register">登録</Link>
        </React.Fragment>
    )
}

export default Header;
