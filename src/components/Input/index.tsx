import React from 'react';
import {Field} from 'react-final-form';

import {InputWrapper, Label, StyledInput} from './styles';

const Input = ({name, placeholder, label, required}: any) => (
    <Field name={name}>
        {({input, meta}: any) => (
            <InputWrapper>
                <Label htmlFor={name}>{label}</Label>
                <StyledInput {...input} placeholder={placeholder} required={required} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
            </InputWrapper>
        )}
    </Field>
);

export default Input;
