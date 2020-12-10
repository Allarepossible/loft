import React from 'react';

import {Container, Title, Info, StyledLink, Subtitle, Error} from './styles';

const FormContainer = ({title, subtitle, content, info, padding, error}: any) => (
    <Container padding={padding}>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {content}
        {info && <Info>
            <span>{info.text}</span>
            <StyledLink to={info.link}>{info.linkText}</StyledLink>
        </Info>}
        {error && <Error>{error}</Error>}
    </Container>
);

export default FormContainer;
