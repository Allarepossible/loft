import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './Routes';
import reducer from './reducers';
import rootSaga from './sagas'
import './assets/Roboto-Regular.ttf'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
