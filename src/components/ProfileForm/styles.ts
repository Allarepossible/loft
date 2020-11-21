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
    align-items: center;
    width: 800px;
    
    & div > button {
        margin-top: 20px;
    }
`;

export const Row = styled.div<{gap?: string}>`
    display: flex;
    
    & > div + div {
        margin-left: ${({gap}) => gap || ''};
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
    padding: 20px 28px;
`;

export const Number = styled.div`
    font-size: 21px;
    line-height: 25px;
    color: #000000;
    margin-top: 28px;
    margin-bottom: 35px;
`;

export const ButtonWrapper = styled.div`
    width: 350px;
`;
