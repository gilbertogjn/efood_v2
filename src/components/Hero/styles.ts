import styled from 'styled-components'
import { colors } from '../../styles'

export const HeroContainer = styled.section`
  height: 250px;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px;
  position: relative;

  h2 {
    color: ${colors.white};
    font-size: 34px;
    max-width: 550px;
  }

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
  }
`
