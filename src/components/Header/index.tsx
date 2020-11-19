import React from 'react';
import {connect} from 'react-redux';

import {logOut} from '../../actions/auth'
import Logo from './Logo';

import {StyledAppBar, StyledLink, Logout, Menu} from './styles';

const Header = ({logOut: out}: any) => (
    <div>
        <StyledAppBar>
            <Logo />
            <Menu>
                <StyledLink to={'/'}>Map</StyledLink>
                <StyledLink to={'/profile'}> Profile</StyledLink>
                <Logout onClick={out}>Log out</Logout>
            </Menu>
        </StyledAppBar>
    </div>
);

export default connect(null, {logOut})(Header);
