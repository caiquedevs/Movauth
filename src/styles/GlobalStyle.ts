import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  /* largura do scroll vertical e horizonal*/
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  /* Cor do scroll*/
  ::-webkit-scrollbar-thumb { background: silver; }
  /* Fundo do scroll*/
  ::-webkit-scrollbar-track { background: transparent; }

  *{
    margin: 0;
    outline: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
    font-family: Archivo, sans-serif;
  }

  main {
    width: 100%;
    height: 100vh;

    display: flex;
    color: ${({ theme }) => theme.colors.txtPrimary};
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    overflow: hidden;

    scroll-behavior: smooth;
  }

  ul {
    list-style: none;
  }

  img {
    width: min-content;
    max-width: 100%;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  span,small {
    display: flex;
  }

  div.custom-tooltip {
    background-color: #ffffff;
    color: #000000;
    padding: 15px 30px;
  }

  .shadow {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.08);
  }
`;

export default GlobalStyle;
