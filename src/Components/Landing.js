import React from 'react'
import { ProductsContext } from '../Contexts/DataContext'
import EachProduct from './EachProduct'

const Landing = () => {
  const products = React.useContext(ProductsContext)
  
  return (
    <div style={{display : 'grid', gridAutoRows : 'repeat(4), 1fr'}}>
        {products.map(eachProduct => <
            EachProduct
            key={eachProduct.id}
            price={eachProduct.price}
            image={eachProduct.image}
            title={eachProduct.title}
        />)}
    </div>
  )
}

export default Landing