import { Link, useLocation } from 'react-router-dom'

import { HeaderBar } from './styles'

import { FaCartPlus, FaArrowLeft } from 'react-icons/fa'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const location = useLocation()

  const openCart = () => {
    if (items.length > 0) {
      dispatch(open())
    }
  }

  return (
    <HeaderBar>
      <div className="container">
        {location.pathname !== '/' && (
          <Link
            title="Voltar para restaurantes"
            className="restaurantsBtn"
            to="/"
          >
            <FaArrowLeft className="arrow" />
            Restaurantes
          </Link>
        )}
        <Link title="Voltar para restaurantes" className="logoHome" to="/">
          <h1>
            e<span>food</span>
          </h1>
        </Link>
        <p onClick={openCart}>
          <span className="cartIcon">
            <FaCartPlus />
          </span>{' '}
          <span className="cartIconText">
            {items.length} produto(s) no carrinho
          </span>
        </p>
      </div>
    </HeaderBar>
  )
}

export default Header
