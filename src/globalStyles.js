import { createGlobalStyle } from 'styled-components';

const GlobalStyles =  createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Eudoxus Sans';
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
    body {
        background-color: #222222;
    }
`

export default GlobalStyles;

