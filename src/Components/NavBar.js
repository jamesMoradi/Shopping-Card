import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

//styles
import styles from './NavBar.module.css'

//context
import { ReducerBodyContext } from '../Contexts/ReducerContext'

//icon
import shoppingIcon from '../Icons/shopping.svg'

const NavBar = () => {
    const {state} = useContext(ReducerBodyContext)
    const [products, setProducts] = useState([])
    const [productsNumber, setProductsNumber] = useState(0)

    useEffect(() => {
        setProducts(state.products)
        const newNumArr = []
      products.map(each => newNumArr.push(each.quantity))
      let newNum = 0
      if (newNumArr.length > 0) {
         for (let i = 0; i < newNumArr.length; i++) {
          newNum += newNumArr[i]
         }
         setProductsNumber(newNum)
      }
    })

  return (
    <nav className={styles.nav}>
      <Link to='/'>products</Link>
      <Link to='/orders'>
      <span>{productsNumber === 0 ? '0' : productsNumber}</span>
      {console.log(productsNumber)}
      <img className={styles.shoppingIcon} src={shoppingIcon} alt=''/>
      </Link>
    </nav>
  )
}

export default NavBar