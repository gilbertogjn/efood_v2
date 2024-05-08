import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.section`
  background-color: ${colors.beige};

  .container {
    height: 384px;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: ${breakpoints.tablet}) {
      padding: 18px 8px;
      height: 250px;
    }
  }

  h1 {
    line-height: 0;
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
