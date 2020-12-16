import React from 'react';
import {Form} from 'react-final-form';
import {connect} from 'react-redux';

import Input from '../Input';
import Button from '../Button';
import FormContainer from '../FormContainer';
import {register} from '../../actions/register';

import {Wrapper, Form as StyledForm} from './styles';

const Content = ({onSubmit}: any) => (
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit}: any) => (
            <StyledForm onSubmit={handleSubmit}>
                <Input type="email" name="email" placeholder="mail@mail.com" label="Email" required />
                <Input type="text" name="name" placeholder="John" label="Your name" required />
                <Input type="text" name="surname" placeholder="Smith" label="Your surname" required />
                <Input type="password" name="password" placeholder="********" label="Password" required />
                <Button text="Create your account"/>
            </StyledForm>
        )}
    />
);

const AuthForm = ({reg, error}: any) => (
    <Wrapper>
        <FormContainer
            title="Create account"
            error={error}
            info={{text: 'Already have an account?', link: '/login', linkText: 'Sign in'}}
            content={<Content onSubmit={(e: any) => {
                e.preventDefault();
                const {name, surname, email, password} = e.target;
                reg({
                    name: name.value,
                    surname: surname.value,
                    email: email.value,
                    password: password.value
                })
            }} />}
        />
    </Wrapper>
);

const mapStateToProps = (state: any) => ({error: state.user.error});
const mapDispatchToProps = {reg: register};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
