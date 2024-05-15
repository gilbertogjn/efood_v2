import styled from 'styled-components'

import { boxShadow, breakpoints, colors } from '../../styles'

export const HeaderBar = styled.section`
  background-color: ${colors.white};
  font-weight: bold;
  font-size: 16px;
  position: sticky;
  top: 0;
  width: 100%;
  color: ${colors.black};
  z-index: 1;
  box-shadow: ${boxShadow.default};
  padding: 0 8px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  .arrow {
    font-size: 12px;
    margin-right: 8px;
    color: ${colors.black};
  }

  .cartIcon {
    color: ${colors.black};

    svg {
      margin-bottom: -2px;
    }
  }

  h1 {
    span {
      color: ${colors.green};
    }
  }

  .restaurantsBtn {
    color: ${colors.black};
  }

  p {
    cursor: pointer;
    text-align: right;
  }

  .cart-number {
    display: none;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    .container {
      width: 100%;
      height: 60px;
      font-size: 14px;
    }

    .cartIconText,
    .link-text {
      display: none;
    }

    .cart-number {
      display: inline;
    }
  }
`
