import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-bottom: 30px;
    margin-top: 40px;
    
    & > button {
        margin-top: 20px;
    }
`;
