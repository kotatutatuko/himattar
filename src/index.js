import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers"

// import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// serviceWorker.register();
