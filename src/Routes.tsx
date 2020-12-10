import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './helpers/PrivateRoute';
import NotAuthRoute from './helpers/NotAuthRoute';
import GlobalStyle from './helpers/global-styles';

const Routes = () => {
    return (
        <div>
            <GlobalStyle />
            <Switch>
                <NotAuthRoute path="/login" component={LoginPage} exact />
                <NotAuthRoute path="/auth" component={AuthPage} exact />
                <PrivateRoute path="/" component={HomePage} exact/>
                <PrivateRoute path="/profile" component={ProfilePage} />
                <Route path="*" component={LoginPage} />
            </Switch>
        </div>
    );
};

export default Routes;
