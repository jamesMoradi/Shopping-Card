import React, {useContext, useEffect, useState} from 'react'
import styles from './Orders.module.css'
import OrdersList from './OrdersList'

//context
import { ReducerBodyContext } from '../Contexts/ReducerContext'
import { REDUCER_ACTION } from '../Contexts/ReducerContext'

const Orders = () => {
  const {state, dispatch} = useContext(ReducerBodyContext)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)

  useEffect(() => {
    let num = 0
    const totalPriceCalculate = state.products.map(each => num += each.quantity * each.price)
    setTotalPrice(totalPriceCalculate)

    const totalProducts = []
    state.products.map(each => totalProducts.push(each.quantity))
    let newNum = 0
    for(let i = 0 ; totalProducts.length ; i++) {
      newNum += totalProducts[i]
    }

    setTotalProducts(newNum)
  })

  return (
    <section className={styles.ordersContainer}>
        <div className={styles.orders}>
          {state.products.length > 0 && state.products.map(each => <OrdersList
          key={each.id}
          image={each.image}
          title={each.title}
          quantity={each.quantity}
          price={each.price}
          id={each.id}
          />)}
        </div>
        <aside className={styles.ordersAsideBar}>
          <div>
            <span className={styles.ordersLabel}>total items:</span>
            <span>{totalProducts}</span>
          </div>
          <div>
            <span className={styles.ordersLabel}>total payment: </span>
            <span>{totalPrice} $</span>
          </div>
          <div>
            <button className={styles.clearBtn} onClick={() => dispatch({type : REDUCER_ACTION.clear})}>clear</button>
            <button className={styles.checkOutBtn} onClick={() => dispatch({type : REDUCER_ACTION.checkOut})}>checkout</button>
          </div>
        </aside>
    </section>
  )
}

export default Orders