import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
`;

export const Form = styled.form`
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
    padding: 56px 112px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Title = styled.h1`
    width: 350px;
    text-align: center;
    font-weight: bold;
    color: black;
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 57px;
`;

export const Button = styled.button`
    background: #FDBF5A;
    border-radius: 50px;
    padding: 10px;
    font-size: 25px;
    margin-bottom: 33px;
    border: none;
    width: 100%;
    cursor: pointer;
    
    :hover {
        background-color: #FFA842;
    }
`;

export const Info = styled.div`
    align-self: center;
    display: inline-flex;
    font-size: 16px;
    line-height: 19px;
    color: #828282;
`;

export const Password = styled.div`
    align-self: flex-end;
    margin-top: -15px;
    font-size: 16px;
    line-height: 19px;
    color: #828282;
    margin-bottom: 46px; 
`;

export const StyledLink = styled(Link)`
    color: #FDBF5A;
    text-decoration: none;
    margin-left: 5px;
`;
