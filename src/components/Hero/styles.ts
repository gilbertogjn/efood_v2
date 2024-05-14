import styled from 'styled-components'
import { colors } from '../../styles'

export const HeroContainer = styled.section`
  height: 250px;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  position: relative;
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
    z-index: 0;
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
      max-width: 550px;
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
