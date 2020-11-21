import React from 'react';

import {StyledLink, LogoText} from './styles';
import {Image, Text} from '../../LogoImages';

const Logo = () => (
    <>
        <StyledLink to="/">
            <Image size="medium" />
            <LogoText><Text /></LogoText>
        </StyledLink>
    </>
);

export default Logo;
