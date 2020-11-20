import React from 'react';

import SideBar from '../../components/Sidebar';
import AuthForm from '../../components/AuthForm';

import {Page, Content} from './styles';

const AuthPage = () => (
    <Page>
        <SideBar />
        <Content>
            <AuthForm />
        </Content>
    </Page>
);

export default AuthPage;
