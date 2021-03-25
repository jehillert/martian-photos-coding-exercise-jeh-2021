import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: rgba(158, 70, 70, 1);
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-size: 16px;
    }
`;

export default GlobalStyle;
