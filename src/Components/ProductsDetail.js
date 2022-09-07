import React, { useContext, useEffect, useState } from 'react'
import {ProductsContext} from '../Contexts/DataContext'
import {useParams, useNavigate} from 'react-router-dom'
import styles from './ProductsDetail.module.css'

const ProductsDetail = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const products = useContext(ProductsContext)
    const params = useParams()
    const navigate = useNavigate()
    const {image, title, category, price, description} = selectedProduct

    useEffect(() => {
        const product = products.find(EachProduct => EachProduct.id === +params.id)
        setSelectedProduct(product)
    }, [])

    const backHandler = () => {
        navigate(-1)
    }

  return (
    <div className={styles.detailContainer}>
        <img alt='' src={image}/>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className={styles.categoryTag}>
                <span>category: </span>
                <span>{category}</span>
            </div>
            <div className={styles.btnsContainer}>
                <span className={styles.price}>{price}$</span>
                <button onClick={backHandler}>back to shop</button>
            </div>
        </div>
    </div>
  )
}

export default ProductsDetail