import { createGlobalStyle } from "styled-components";
import theme from "../theme/theme.json";
import { topCircle, bottomCircle } from "../../assets/media";

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.primary}, ${theme.fonts.secondary};
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
  }

  html {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  body {
    animation: rotate 30s linear infinite;
    background-attachment: fixed;
    background-color: ${theme.colors.eastern_blue};
    background-image: url(${topCircle}), url(${bottomCircle});
    background-position: right 51vw bottom 38vh, left 50vw top 50vh;
    background-repeat: no-repeat;
  }
`;

export default GlobalStyle;
