import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --bg-color: #001055;
    --text-color: white;
    --accent-color-1: blue;
    --accent-color-2: white;
    --accent-color-3: black;
  }
  html{
    font-size: 10px;
    background-color: var(--bg-color);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .app{
    background-color: var(--bg-color);
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
`;
export default GlobalStyles;