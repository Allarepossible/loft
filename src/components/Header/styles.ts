import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: black;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    padding: 20px 25px;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Menu = styled.header`
    display: flex;
    justify-content: flex-end;
`;

export const StyledLink = styled(Link)<{active?: boolean}>`
    color: ${({active}: any) => active ? '#FDBF5A' : 'white'};
    text-decoration: none;
    
    & + & {
        margin-left: 40px;
    }
`;

export const Logout = styled.span`
    color: white;
    margin-left: 40px;
    cursor: pointer;
`;
