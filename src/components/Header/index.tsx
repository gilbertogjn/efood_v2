import { HeaderBar } from './styles'
import { FaCartPlus } from 'react-icons/fa'

import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <Link title="Voltar para home" to="/">
        <h1>
          e<span>food</span>
        </h1>
      </Link>
      <span className="cartIcon">
        <FaCartPlus />
      </span>
    </div>
  </HeaderBar>
)

export default Header
