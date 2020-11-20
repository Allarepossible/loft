import React from 'react';
import {connect} from 'react-redux';

import {authenticate} from '../../actions/auth';
import Input from '../Input';

import {Wrapper, Form, Title, Button, Info, StyledLink, Password} from './styles';

const LoginForm = ({authenticate}: any) => (
    <Wrapper>
        <Form onSubmit={(e: any) => {
            e.preventDefault();
            const {email, password} = e.target;

            authenticate(email.value, password.value);
        }}>
            <Title>Sign in</Title>
            <Input type="email" name="email" placeholder="mail@mail.com" label="Email" />
            <Input type="password" name="password" placeholder="********" label="Password" />
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
