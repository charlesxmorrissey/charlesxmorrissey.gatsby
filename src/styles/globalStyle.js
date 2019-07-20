import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export default createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${colors.bgColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-feature-settings: 'kern';
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.3;
  }

  h1 {
    font-weight: 600;
  }
`
