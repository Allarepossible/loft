import React from 'react';
import {connect} from 'react-redux';

import SideBar from '../../components/Sidebar';
import LoginForm from '../../components/LoginForm';

import {Page, Content} from './styles';

const HomePage = ({isLoggedIn, history}: any) => {
    if (isLoggedIn) {
        history.push('/');
    }
    return (
        <Page>
            <SideBar />
            <Content>
                <LoginForm />
            </Content>
        </Page>
    )
};
const mapStateToProps = ({auth: {isLoggedIn}}: any, {history}: any) => ({isLoggedIn, history});

export default connect(mapStateToProps)(HomePage);
