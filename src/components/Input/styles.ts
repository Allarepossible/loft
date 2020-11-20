import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    margin-bottom: 25px;
   
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
`;

export const Label = styled.label`
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 5px;
`;


export const StyledInput = styled.input`
    font-size: 18px;
    line-height: 21px;
    padding: 6px 0 7px;
    border: none;
    width: 100%;
    
    &:focus {
        outline: 0;
    }
    
    &:placeholder {
        color: #b2b2b2;
    }
`;
