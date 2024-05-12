import { HeaderBar } from './styles'
import bgHeader from '../../assets/image/bgHeader.svg'
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
      <FaCartPlus />
    </div>
  </HeaderBar>
)

export default Header
