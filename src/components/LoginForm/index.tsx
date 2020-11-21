import React from 'react';
import {connect} from 'react-redux';

import {authenticate} from '../../actions/auth';
import FormContainer from '../FormContainer';
import Input from '../Input';
import Button from '../Button';

import {Wrapper, Form, Password} from './styles';

const Content = ({onSubmit}: any) => (
    <Form onSubmit={onSubmit}>
        <Input type="email" name="email" placeholder="mail@mail.com" label="Email" />
        <Input type="password" name="password" placeholder="********" label="Password" />
        <Password>Forgot your password?</Password>
        <Button text="Sign in" />
    </Form>
);

const LoginForm = ({authenticate}: any) => (
    <Wrapper>
        <FormContainer
            title="Sign in"
            info={{text: 'New user?', link: '/auth', linkText: 'Start here'}}
            content={<Content onSubmit={(e: any) => {
                e.preventDefault();
                const {email, password} = e.target;

                authenticate(email.value, password.value);
            }} />}
        />
    </Wrapper>
);

export default connect(null, {authenticate})(LoginForm);
