import Header from '../../components/Header'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header />
        <Hero />
        <RestaurantList restaurants={restaurants} />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Home
