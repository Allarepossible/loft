import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './Routes';
import reducer from './reducers';
import {authMiddleware} from './helpers/auth'

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(authMiddleware)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
