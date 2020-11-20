import React from 'react';

import {InputWrapper, StyledInput, Label} from './styles';

const Input = ({name, type, placeholder, label}: any) => (
    <InputWrapper>
        <Label htmlFor={name}>{label}</Label>
        <StyledInput id={name} type={type} name={name} size={28} placeholder={placeholder}/>
    </InputWrapper>
);

export default Input;
