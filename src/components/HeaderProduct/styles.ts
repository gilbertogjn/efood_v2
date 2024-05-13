import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.section`
  background-color: ${colors.white};
  font-weight: bold;
  font-size: 16px;

  h1 {
    line-height: 0;
  }

  img {
    margin: 40px 0;

    @media only screen and (max-width: ${breakpoints.tablet}) {
      width: 100px;
      height: 60px;
    }
  }
`

export const HeaderProductInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.black};
  height: 70px;
  position: sticky;
  top: 0;

  h1 {
    span {
      color: ${colors.green};
    }
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .restaurantsBtn {
    color: ${colors.black};
    width: 197px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
      width: auto;
    }
  }

  p {
    cursor: pointer;
    text-align: right;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`

export const HeroBar = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 25px 8px;

    h2 {
      font-size: 36px;
      font-weight: bold;
      z-index: 1;
      color: ${colors.white};
    }

    h3 {
      font-weight: 100;
      font-size: 32px;
      z-index: 1;
      text-transform: capitalize;
      color: ${colors.white};
    }
  }
`
