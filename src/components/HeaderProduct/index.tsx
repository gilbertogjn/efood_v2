import { Link, useParams } from 'react-router-dom'

import { HeaderBar, HeaderProductInfo, HeroBar } from './styles'

import { FaCartPlus, FaArrowLeft } from 'react-icons/fa'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useGetRestaurantQuery } from '../../services/api'

const HeaderProduct = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    if (items.length > 0) {
      dispatch(open())
    }
  }

  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  return (
    <HeaderBar>
      <div className="container">
        <HeaderProductInfo>
          <Link
            title="Voltar para restaurantes"
            className="restaurantsBtn"
            to="/"
          >
            <FaArrowLeft className="arrow" />
            Restaurantes
          </Link>
          <Link title="Voltar para restaurantes" className="logoHome" to="/">
            <h1>
              e<span>food</span>
            </h1>
          </Link>
          <p onClick={openCart}>
            <span className="cartIcon">
              <FaCartPlus />
            </span>{' '}
            {items.length} produto(s) no carrinho
          </p>
        </HeaderProductInfo>
      </div>
      <HeroBar style={{ backgroundImage: `url(${restaurant?.capa})` }}>
        <div className="container">
          <h3>{restaurant?.tipo}</h3>
          <h2>{restaurant?.titulo}</h2>
        </div>
      </HeroBar>
    </HeaderBar>
  )
}

export default HeaderProduct
