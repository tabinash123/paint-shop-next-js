// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color:#f5f5f5;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #333;
  }

  p {
    color: #555;
  }

  .container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
