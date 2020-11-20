import React from 'react';
import {connect} from 'react-redux';

import Header from '../../components/Header';

const ProfilePage = () => {
    return (
        <>
            <Header active="profile"/>
            Страница профиля
        </>
    );
};

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(ProfilePage);
