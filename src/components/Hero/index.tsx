import bgHero from '../../assets/image/bgHero.jpeg'
import { HeroContainer } from './styles'

const Hero = () => (
  <HeroContainer style={{ backgroundImage: `url(${bgHero})` }}>
    <div className="container">
      <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
    </div>
  </HeroContainer>
)

export default Hero
