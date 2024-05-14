import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonLink = styled(Link)`
  height: auto;
  width: 120px;
  color: ${colors.white};
  background-color: ${colors.black};
  padding: 8px 12px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
`

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 8px 0;
  text-decoration: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 8px;
`
