import ProductCard from '../ProductCard'

import { Grid } from './styles'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../Loader'

const ProductList = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <div className="container">
      <Grid>
        {restaurant.cardapio.map((dish) => (
          <ProductCard key={dish.id} dish={dish} />
        ))}
      </Grid>
    </div>
  )
}

export default ProductList
