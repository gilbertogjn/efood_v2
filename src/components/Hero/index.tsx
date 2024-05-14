import { useParams } from 'react-router-dom'
import bgHero from '../../assets/image/bgHero.jpeg'
import { HeroContainer } from './styles'
import { useGetRestaurantQuery } from '../../services/api'

const Hero = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantQuery(id!)

  return (
    <HeroContainer
      style={{ backgroundImage: `url(${id ? restaurant?.capa : bgHero})` }}
    >
      <div className="container">
        <h3>{id && restaurant?.tipo}</h3>
        <h2>
          {id
            ? restaurant?.titulo
            : 'Viva experiências gastronômicas no conforto da sua casa'}
        </h2>
      </div>
    </HeroContainer>
  )
}

export default Hero
