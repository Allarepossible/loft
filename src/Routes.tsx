import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AuthPage from './pages/AuthPage';
import Map from './components/Map';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './helpers/PrivateRoute';
import GlobalStyle from './helpers/global-styles';

const Routes = () => {
    return (
        <div>
            <GlobalStyle />
            <Map />
            <Switch>
                <Route path="/login" component={LoginPage} exact />
                <Route path="/auth" component={AuthPage} exact />
                <PrivateRoute path="/" component={HomePage} exact/>
                <PrivateRoute path="/profile" component={ProfilePage} />
                <Route path="*" component={LoginPage} />
            </Switch>
        </div>
    );
};

export default Routes;
