import React, {useContext} from 'react'

//icons
import addIcon from '../Icons/add.svg'
import deleteIcon from '../Icons/delete.svg'
import removeIcon from '../Icons/remove.svg'

//styles
import styles from './OrdersList.module.css'

//context
import { ReducerBodyContext } from '../Contexts/ReducerContext'
import { REDUCER_ACTION } from '../Contexts/ReducerContext'

const OrdersList = props => {
    const {dispatch} = useContext(ReducerBodyContext)
    const {image, title, price, quantity} = props
  return (
    <div className={styles.orederListContainer}>
        <img className={styles.orederImage} alt='' src={image}/>
        <div>
            <span className={styles.orderTitle}>{title.split(' ')[0] + ' ' +title.split(' ')[1]}</span>
            <span className={styles.orderPrice}>{price} $</span>
        </div>
        <span className={styles.orderQuantity}>{quantity}</span>
        <div>
            {quantity > 1 ? 
                <button onClick={() => dispatch({type : REDUCER_ACTION.decrease, payLoad : props})}>
                    <img alt='' src={removeIcon}/>
                </button> :
                <button onClick={() => dispatch({type : REDUCER_ACTION.removeItem, payLoad : props})}>
                    <img alt='' src={deleteIcon}/>
                </button>
            }
            <button onClick={() => dispatch({type : REDUCER_ACTION.increase, payLoad : props})}>
                <img alt='' src={addIcon}/>
            </button>
        </div>
    </div>
  )
}

export default OrdersList