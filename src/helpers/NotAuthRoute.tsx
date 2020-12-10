import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {Route} from 'react-router-dom';

const NotAuthRoute = ({
    component: Component,
    isAuthorized,
    ...rest
}: any) => (
    <Route
        {...rest}
        render={routeProps =>
            isAuthorized ? (
                <Redirect to="/" />
            ) : (
                <Component {...routeProps} />
            )
        }
    />
);

const mapStateToProps = ({auth: {isLoggedIn}}: any) => ({isAuthorized: isLoggedIn});

export default connect(mapStateToProps)(NotAuthRoute);
