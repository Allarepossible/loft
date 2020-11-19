import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {authenticate} from '../../actions/auth';

const HomePage = ({authenticate, isLoggedIn}: any) => {
    if (isLoggedIn) {
        return <Link to='map'>Перейти к карте</Link>;
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
const mapStateToProps = ({auth: {isLoggedIn}}: any) => ({isLoggedIn});
const mapDispatchToProps = {authenticate};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
