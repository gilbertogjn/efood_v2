import Loader from '../Loader'
import RestaurantCard from '../RestaurantCard'

import { Grid } from './styles'

export type Props = {
  restaurants?: Restaurant[]
  isLoading?: boolean
}

const RestaurantList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <Grid>
        {restaurants &&
          restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              featured={restaurant.destacado}
              category={restaurant.tipo}
              description={restaurant.descricao}
              image={restaurant.capa}
              title={restaurant.titulo}
              rate={restaurant.avaliacao}
            />
          ))}
      </Grid>
    </div>
  )
}

export default RestaurantList
