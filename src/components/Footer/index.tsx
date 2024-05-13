import { Link } from 'react-router-dom'

import { Container, Socials } from './styles'

import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => (
  <Container>
    <Link title="Voltar para home" to="/">
      <h1>
        e<span>food</span>
      </h1>
    </Link>
    <Socials>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaFacebook />
      </a>
      <a href="#">
        <FaXTwitter />
      </a>
    </Socials>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Footer
