import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
     margin: 0;
     padding: 0;
     box-sizing: border-box; 
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: #358fc9;
  }
`
export default GlobalStyles
