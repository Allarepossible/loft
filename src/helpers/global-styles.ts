import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    button {
        border: 0;
    }
    body {
        font: 14px 'Roboto', Arial, sans-serif;
        line-height: 1.2;
    
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: #f4f4f4;
       
    }
    @font-face {
        font-family: 'Roboto';
    
        url('../assets/Roboto-Regular.ttf') format('truetype');
    }
`;

export default GlobalStyle;
