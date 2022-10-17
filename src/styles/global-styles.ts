// import { media } from './media';
import { createGlobalStyle } from 'styled-components';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  html {
    font-size: 10px;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${p => p.theme.background};
    font-size: 1.6rem;
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label,span {
    line-height: 24px;
    font-size: 1.4rem;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 2.4rem;
    height: 2.4rem;
  }

  body::-webkit-scrollbar {
  width: 0rem !important;
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
}


`;
