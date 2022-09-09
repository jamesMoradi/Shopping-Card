import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

//styles
import styles from './NavBar.module.css'

//context
import { ReducerBodyContext } from '../Contexts/ReducerContext'
import { calculationProductsQuantity } from '../Contexts/ReducerContext'

//icon
import { ShoppingCartOutlined } from '@mui/icons-material'

const NavBar = () => {
    const {state} = useContext(ReducerBodyContext)
    const [products, setProducts] = useState([])
    const [productsNumber, setProductsNumber] = useState(0)

    useEffect(() => {
        setProducts(state.products)
        calculationProductsQuantity(products, setProductsNumber)
    })

  return (
    <nav className={styles.nav}>
      <Link to='/'>products</Link>
      <Link className={styles.toOrderLink} to='/orders'>
      <span>{productsNumber === 0 ? '0' : productsNumber}</span>
      <ShoppingCartOutlined color='primary' fontSize='large'/>
      </Link>
    </nav>
  )
}

export default NavBar