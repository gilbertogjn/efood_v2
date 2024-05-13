import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 48px 0;
  gap: 48px;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
