import React from 'react';
import {connect} from 'react-redux';

import Header from '../../components/Header';
import {logOut} from '../../actions/auth';

const ProfilePage = () => {
    return (
        <div className="App">
            <Header />
            Страница профиля
            <button onClick={logOut}>Выйти</button>
        </div>
    );
};

const mapDispatchToProps = {logOut};

export default connect(null, mapDispatchToProps)(ProfilePage);
