import React from 'react';

import Input from '../Input';
import Button from '../Button';
import FormContainer from '../FormContainer';

import {Wrapper, Form} from './styles';

const Content = ({onSubmit}: any) => (
    <Form onSubmit={onSubmit}>
        <Input type="email" name="email" placeholder="mail@mail.com" label="Email" />
        <Input type="name" name="name" placeholder="John Smith" label="Your name" />
        <Input type="password" name="password" placeholder="********" label="Password" />
        <Button text="Create your account" />
    </Form>
);

const AuthForm = () => (
    <Wrapper>
        <FormContainer
            title="Create account"
            info={{text: 'Already have an account?', link: '/login', linkText: 'Sign in'}}
            content={<Content onSubmit={() => {}} />}
        />
    </Wrapper>
);

export default AuthForm;
