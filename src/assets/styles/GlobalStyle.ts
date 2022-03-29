import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  a {
    background-color: transparent;
    color: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  img {
    border-style: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input { /* 1 */
    overflow: visible;
  }


  button,
  select { /* 1 */
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }


  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }


  textarea {
    overflow: auto;
  }


  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }


  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    background: #F7F8FA;
    max-height: 100vh;
    overflow-y: hidden;
  }

`;

export default GlobalStyle;
