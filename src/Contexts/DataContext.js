import React, {createContext, useEffect, useState} from 'react'
import { productsData } from '../Services/Api'
export const ProductsContext = createContext()

const BodyContext = props => { 
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
            const data = await productsData()
            setProducts(data)
    }

  return (
    <ProductsContext.Provider value={products}>
        {props.children}
    </ProductsContext.Provider>
  )
}

export default BodyContext