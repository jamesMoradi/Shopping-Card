import React, {useContext, useEffect, useState} from 'react'
import styles from './Orders.module.css'
import OrdersList from './OrdersList'

//context
import { ReducerBodyContext } from '../Contexts/ReducerContext'
import { REDUCER_ACTION } from '../Contexts/ReducerContext'

//functions
import { calculatingTotalPrice } from '../Contexts/ReducerContext'
import { calculationProductsQuantity } from '../Contexts/ReducerContext'

const Orders = () => {
  const {state, dispatch} = useContext(ReducerBodyContext)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)

  useEffect(() => {
    calculatingTotalPrice(state.products, setTotalPrice)
    calculationProductsQuantity(state.products, setTotalProducts)
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