import React from 'react';

import Input from '../Input';

import {Wrapper, Form, Title, Button, Info, StyledLink, Password} from './styles';

const AuthForm = () => (
    <Wrapper>
        <Form onSubmit={() => {}}>
            <Title>Create account</Title>
            <Input type="email" name="email" placeholder="mail@mail.com" label="Email" />
            <Input type="name" name="name" placeholder="John Smith" label="Your name" />
            <Input type="password" name="password" placeholder="********" label="Password" />
            <Button type="submit">Sign in</Button>
            <Info>
                <span>Already have an account?</span>
                <StyledLink to="/login">Sign in</StyledLink>
            </Info>
        </Form>
    </Wrapper>
);

export default AuthForm;
