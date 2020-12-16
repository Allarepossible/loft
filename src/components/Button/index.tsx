import React from 'react';

import {StyledButton, StyledLink} from './styles';

interface Props {
    text: string;
    disabled?: boolean;
    link?: string;
}

const Button = ({text, link, disabled}: Props) => {
    if (link) {
        return (<StyledLink to={link}>{text}</StyledLink>);
    }

    return (<StyledButton type="submit" disabled={disabled}>{text}</StyledButton>);
};

export default Button;
