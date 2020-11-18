import React from 'react';

import {StyledAppBar, StyledLink} from './styles';

const Header = () => (
    <div>
        <StyledAppBar>
            <StyledLink to={'/'}>Home</StyledLink>
            <StyledLink to={'/map'}>Map</StyledLink>
            <StyledLink to={'/profile'}> Profile</StyledLink>
        </StyledAppBar>
    </div>
);

export default Header;
