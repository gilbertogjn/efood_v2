import styled from 'styled-components'
import { boxShadow, breakpoints, colors } from '../../styles'

export const HeaderBar = styled.section`
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${boxShadow.default};
  background-color: white;

  .container {
    height: 70px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .cartIcon {
      color: ${colors.black};
      cursor: pointer;
    }

    @media only screen and (max-width: ${breakpoints.tablet}) {
      padding: 18px 8px;
      height: 250px;
    }
  }

  h1 {
    color: ${colors.black};
    line-height: 0;

    span {
      color: ${colors.green};
    }
  }

  h2 {
    font-size: 36px;
    font-weight: 900;
    max-width: 540px;
    text-align: center;

    @media only screen and (max-width: ${breakpoints.tablet}) {
      font-size: 30px;
    }
  }
`
