import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import PrivateRoute from './helpers/PrivateRoute';
import GlobalStyle from './helpers/global-styles';

const Routes = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <PrivateRoute path="/map" component={MapPage} />
                <PrivateRoute path="/profile" component={ProfilePage} />
            </Switch>
        </>
    );
};

export default Routes;
