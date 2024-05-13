import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  red: '#E66767',
  lightBeige: '#FFF8F2',
  beige: '#FFEBD9',
  yellow: '#FFB930',
  black: '#000000',
  grey: '#E6E6E6',
  textGrey: '#6B6B6B',
  green: '#34A853'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const boxShadow = {
  default: '0px 4px 8px 4px rgba(0, 0, 0, 0.05);'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.textGrey};

    h1, h2, h3 {
      color: ${colors.black};
      line-height: 1;
    }
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 8px;
  }

  a {
    text-decoration: none;
  }
`
