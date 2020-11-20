import React from 'react';
import {connect} from 'react-redux';

import {authenticate} from '../../actions/auth';
import {Wrapper, Form, Title, Label, Input, Button, Info, StyledLink, Password} from './styles';

const LoginForm = ({authenticate}: any) => (
    <Wrapper>
        <Form onSubmit={(e: any) => {
            e.preventDefault();
            const {email, password} = e.target;

            authenticate(email.value, password.value);
        }}>
            <Title>Sign in</Title>
            <Label htmlFor="email">Email</Label>
            <Input><input id="email" type="email" name="email" size={28} placeholder="mail@mail.com" /></Input>
            <Label htmlFor="password">Password</Label>
            <Input><input id="password" type="password" name="password" size={28} placeholder="********"/></Input>
            <Password>Forgot your password?</Password>
            <Button type="submit">Sign in</Button>
            <Info>
                <span>New user?</span>
                <StyledLink to="/auth">Start here</StyledLink>
            </Info>
        </Form>
    </Wrapper>
);

export default connect(null, {authenticate})(LoginForm);
