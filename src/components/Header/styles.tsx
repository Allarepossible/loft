import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledAppBar = styled.header`
    background-color: black;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    height: 112px;
    padding: 20px 25px;
    display: flex;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    color: ${({active}: any) => active ? '#FDBF5A' : 'white'};
    text-decoration: none;
`;
