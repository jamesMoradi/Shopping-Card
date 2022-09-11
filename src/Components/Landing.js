import React, {useState, useEffect} from 'react'
import { ProductsContext } from '../Contexts/DataContext'
import EachProduct from './EachProduct'

//MUI
import { Container, Grid } from '@mui/material'

//components
import Loading from './Loading'

const Landing = () => {
  const products = React.useContext(ProductsContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (products !== []) {
      setIsLoading(false)
    }
  }, [products])

  return (
    <Container>
      <Loading isLoaded={isLoading}/>
      <Grid container spacing={5}>
        {products.map(eachProduct => (
          <Grid item my={5} md={3}>
              <EachProduct
              key={eachProduct.id}
              id={eachProduct.id}
              price={eachProduct.price}
              image={eachProduct.image}
              title={eachProduct.title}
              quantity={eachProduct.quantity}
          /></Grid>))}
      </Grid>
    </Container>
  )
}

export default Landing