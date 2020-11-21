import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled.button`
    background: #FDBF5A;
    border-radius: 50px;
    padding: 10px;
    font-size: 25px;
    border: none;
    width: 100%;
    cursor: pointer;
    
    :hover {
        background-color: #FFA842;
    }
`;

export const StyledLink = styled(Link)`
    background: #FDBF5A;
    border-radius: 50px;
    padding: 10px;
    font-size: 25px;
    border: none;
    width: 100%;
    cursor: pointer;
    
    :hover {
        background-color: #FFA842;
    }
`;
