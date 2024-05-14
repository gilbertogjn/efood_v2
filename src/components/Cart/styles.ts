import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Viewport = styled.div`
  z-index: 3;
  display: none;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`

export const CartContainer = styled.aside`
  z-index: 100;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background-color: ${colors.white};
  color: ${colors.textGrey};
  padding: 32px 12px;

  .secondaryBtn {
    background-color: ${colors.grey};
    color: ${colors.black};
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    width: 85%;
  }

  h3,
  p {
    margin-bottom: 16px;
  }

  .card-data-row {
    display: grid;
    grid-template-columns: 70% auto;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      display: flex;
      width: 100%;
      background-color: ${colors.grey};
      padding: 8px;
      position: relative;
      border-radius: 8px;

      p {
        color: ${colors.green};
      }

      .itemImg {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 12px;
        border-radius: 8px;
      }

      .removeItem {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 16px;
        cursor: pointer;
      }
    }
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.black};
  font-weight: bold;
  font-size: 14px;
  margin: 40px 0 16px;
`

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 34px;

  .buttons {
    display: flex;
    flex-direction: column;
    flex: auto;
    gap: 8px;
    margin-top: 24px;
  }
`

export const InputGroup = styled.div`
  display: block;
  width: 100%;
  margin-top: 8px;

  label {
    font-size: 14px;
    font-weight: bold;
  }

  input {
    margin-top: 8px;
    width: 100%;
    background-color: ${colors.grey};
    border: none;
    padding: 8px;
    font-size: 14px;
    border-radius: 8px;
  }
`
