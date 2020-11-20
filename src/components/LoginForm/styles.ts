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
    align-self: center;
    font-weight: bold;
    color: black;
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 57px;
`;

export const Label = styled.label`
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin-top: 10px;
`;

export const Input = styled.div`
    position: relative;
    align-self: center;
    margin-bottom: 25px;
    width: 350px;
    
   
    &::before {
        left: 0;
        right: 0; 
        bottom: 0;
        content: " ";
        position: absolute;
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    }
    
    &:hover:before {
        border-bottom: 2px solid rgba(0, 0, 0, 0.87);
    }
    
    & input {
        font-size: 18px;
        line-height: 21px;
        padding: 6px 0 7px;
        border: none;
        width: 100%;
        
        &:focus {
            outline: 0;
        }
        &::placeholder {
          color: #b2b2b2;
        }
    }
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
