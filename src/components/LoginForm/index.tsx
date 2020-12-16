import React from 'react';
import {Form} from 'react-final-form';
import {connect} from 'react-redux';

import {authenticate} from '../../actions/auth';
import FormContainer from '../FormContainer';
import Input from '../Input';
import Button from '../Button';

import {Wrapper, Form as StyledForm, Password} from './styles';

const Content = ({onSubmit}: any) => (
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit}: any) => (
            <StyledForm onSubmit={handleSubmit}>
                <Input type="email" name="email" placeholder="mail@mail.com" label="Email" />
                <Input type="password" name="password" placeholder="********" label="Password" />
                <Password>Forgot your password?</Password>
                <Button text="Sign in" />
            </StyledForm>
        )}
    />
);

const LoginForm = ({authenticate}: any) => (
    <Wrapper>
        <FormContainer
            title="Sign in"
            info={{text: 'New user?', link: '/auth', linkText: 'Start here'}}
            content={<Content onSubmit={(values: any) => {
                authenticate(values.email, values.password);
            }} />}
        />
    </Wrapper>
);

export default connect(null, {authenticate})(LoginForm);
