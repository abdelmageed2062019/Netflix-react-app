import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body, html {
        font-family: 'Helvetica Neue' , Helvetica, Sans-Serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #eeeeee;
        font-size: 16px;
    }
`;
