import React from 'react';
import {connect} from 'react-redux';

import {logOut} from '../../actions/auth'
import Logo from './Logo';

import {StyledHeader, StyledLink, Logout, Menu} from './styles';

const Header = ({logOut: out}: any) => (
    <StyledHeader>
        <Logo />
        <Menu>
            <StyledLink to={'/'}>Map</StyledLink>
            <StyledLink to={'/profile'}> Profile</StyledLink>
            <Logout onClick={out}>Sign out</Logout>
        </Menu>
    </StyledHeader>
);

export default connect(null, {logOut})(Header);
