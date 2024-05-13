import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  img {
    width: 125px;
  }

  p {
    max-width: 100%;
    width: 480px;
    font-size: 10px;
    text-align: center;
  }

  h1 {
    color: ${colors.white};

    span {
      color: ${colors.green};
    }
  }
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 32px 0 80px;

  a {
    color: ${colors.white};
  }
`
