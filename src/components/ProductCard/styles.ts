import styled from 'styled-components'
import { boxShadow, breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  position: relative;
  width: 320px;
  background-color: ${colors.white};
  padding: 12px;
  box-shadow: ${boxShadow.default};
  border-radius: 8px;

  @media screen and (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    margin: 8px 0;
    line-height: 22px;
  }
`

export const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Número de linhas desejado */
  -webkit-box-orient: vertical;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  z-index: 1;
  padding: 0 8px;

  &.visible {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .container {
    width: 750px;
    position: relative;
    display: flex;
    gap: 24px;
    padding: 32px;
    background-color: ${colors.white};
    border-radius: 8px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
      display: block;
      padding: 28px;
    }

    .infos {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      gap: 12px;
    }

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
      border-radius: 8px;

      @media only screen and (max-width: ${breakpoints.tablet}) {
        margin-bottom: 8px;
        width: 100%;
        height: 200px;
      }
    }

    .close {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }

  ${ButtonContainer} {
    width: auto;
    padding: 4px 7px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
`
