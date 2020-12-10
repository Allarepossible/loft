import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div<{padding?: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
    padding: ${({padding}) => padding || '56px 112px'};
`;

export const Subtitle = styled.h3`
    font-size: 18px;
    font-weight: 100;
    line-height: 21px;
    color: #7B7B7B;
    margin-bottom: 50px;
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    color: black;
    font-size: 30px;
    line-height: 36px;
    margin-top: 0;
    margin-bottom: 12px;
`;

export const Info = styled.div`
    align-self: center;
    display: inline-flex;
    font-size: 16px;
    line-height: 19px;
    color: #828282;
`;

export const StyledLink = styled(Link)`
    color: #FDBF5A;
    text-decoration: none;
    margin-left: 5px;
`;

export const Error = styled.span`
    color: red;
    margin: 15px 0;
`;
