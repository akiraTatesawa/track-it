import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
  }

  button, svg, input[type="button"] {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

`;

export default GlobalStyle;
