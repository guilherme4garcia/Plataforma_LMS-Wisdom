import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: #121214;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #141416;
  }

  body, input, button {
    font: 400 18px/28px 'Roboto', sans-serif;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
  }

  div {
    border-radius: 4px;
  }
`;
