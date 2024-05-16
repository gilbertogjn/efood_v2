import Header from '../../components/Header'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading: isLoadingRestaurants } =
    useGetRestaurantsQuery()

  return (
    <>
      <Header />
      <Hero />
      <RestaurantList
        restaurants={restaurants}
        isLoading={isLoadingRestaurants}
      />
    </>
  )
}

export default Home
