import React from 'react';

import {StyledButton, StyledLink} from './styles';

interface Props {
    text: string;
    link?: string;
}

const Button = ({text, link}: Props) => {
    if (link) {
        return (<StyledLink to={link}>{text}</StyledLink>);
    }

    return (<StyledButton type="submit">{text}</StyledButton>);
};

export default Button;
