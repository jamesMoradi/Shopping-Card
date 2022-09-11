import React, {useContext, useEffect} from 'react'
import styles from './Orders.module.css'
import OrdersList from './OrdersList'

//context
import { ReducerBodyContext } from '../Contexts/ReducerContext'
import { REDUCER_ACTION } from '../Contexts/ReducerContext'

const Orders = () => {
  const {state, dispatch} = useContext(ReducerBodyContext)
 
  useEffect(() => {
    
  })

  return (
    <section className={styles.ordersContainer}>
        <div className={styles.orders}>
          {state.products.length > 0 && state.products.map(data => <OrdersList key={data.id} data={data}/>)}
        </div>
        <aside className={styles.ordersAsideBar}>
          <div>
            <span className={styles.ordersLabel}>total items:</span>
            <span>{state.itemsCounter}</span>
          </div>
          <div>
            <span className={styles.ordersLabel}>total payment: </span>
            <span>{state.total} $</span>
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