import React from 'react';
import {connect} from 'react-redux';

import {authenticate} from '../../actions/auth';

const HomePage = ({authenticate, isLoggedIn, history}: any) => {
    if (isLoggedIn) {
        history.push('/');
    }
    return (
        <>
            <form onSubmit={(e: any) => {
                e.preventDefault();
                const {email, password} = e.target;

                authenticate(email.value, password.value);
            }}>
                <label htmlFor="email">Email: </label>
                <input id="email" type="email" name="email" size={28} />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" name="password" size={28} />
                <button type="submit">Log in</button>
            </form>

        </>
    )
};
const mapStateToProps = ({auth: {isLoggedIn}}: any, {history}: any) => ({isLoggedIn, history});
const mapDispatchToProps = {authenticate};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
