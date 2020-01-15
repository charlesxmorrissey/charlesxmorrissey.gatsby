import { createGlobalStyle } from 'styled-components'

import { media } from 'utils/helpers'

import colors from './colors'

export default createGlobalStyle`
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
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 36px;
    font-weight: 600;

    ${media.medium`
      font-size: 42px;
    `}
  }

  p {
    font-size: 18px;

    ${media.medium`
      font-size: 24px;
    `}
  }
`
