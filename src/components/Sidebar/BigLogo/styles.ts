import styled from 'styled-components';

export const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & svg + svg {
        margin-top: 30px;
    }
`;
