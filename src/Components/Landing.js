import React from 'react'
import { ProductsContext } from '../Contexts/DataContext'
import EachProduct from './EachProduct'
import styles from './Landing.module.css'

const Landing = () => {
  const products = React.useContext(ProductsContext)

  return (
    <div className={styles.ProductsContainer}>
        {products.map(eachProduct => <
            EachProduct
            key={eachProduct.id}
            id={eachProduct.id}
            price={eachProduct.price}
            image={eachProduct.image}
            title={eachProduct.title}
        />)}
    </div>
  )
}

export default Landing