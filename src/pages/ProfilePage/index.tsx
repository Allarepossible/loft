import React from 'react';
import {connect} from 'react-redux';

import Header from '../../components/Header';
import ProfileForm from '../../components/ProfileForm';

import {Page, Content} from './styles';

const ProfilePage = () => {
    return (
        <Page>
            <Header active="profile"/>
            <Content>
                <ProfileForm />
            </Content>
        </Page>
    );
};

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(ProfilePage);
