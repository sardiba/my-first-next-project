import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      html,
      body {
        padding: 10px;
        margin: 10px;
        background-color: lightsalmon;
        /* border: 3px hotpink solid; */
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      
      a {
        color: #0070f3;
        text-decoration: none;
      }
      
      * {
        box-sizing: border-box;
      }
      `;

export default GlobalStyles;
