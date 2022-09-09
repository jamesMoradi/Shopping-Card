import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './EachProduct.module.css'

//icons
import deleteIcon from '../Icons/delete.svg'
import addIcon from '../Icons/add.svg'
import removeIcon from '../Icons/remove.svg'

//context
import { ReducerBodyContext } from '../Contexts/ReducerContext'

//actions
import { REDUCER_ACTION } from '../Contexts/ReducerContext'

const EachProduct = props => {
    const {dispatch, state} = useContext(ReducerBodyContext)
    const {image, title, price, id} = props
    const titleInArray = title.split(' ')
    const newTitle = titleInArray[0] + '' + titleInArray[1]

    const add = () => {
      dispatch({type : REDUCER_ACTION.increase, payLoad : props})
      const x = state.products.filter(each => each.id === id)
    }

  return (
    <div className={styles.CardContainer}>
        <img src={image} alt='' />
        <div>
            <h2>{newTitle}</h2>
            <span>{price}$</span>
        </div>
        <div>
        <Link to={`/products/${id}`}>Details</Link>
        {
          !!state.products.find(EachProduct => EachProduct.id === id) ? 
          <div>
            <button className={styles.icon} onClick={() => dispatch({type : REDUCER_ACTION.removeItem, payLoad : props})}><img alt='' src={deleteIcon}/></button>
            <button className={styles.icon} onClick={() => dispatch({type : REDUCER_ACTION.decrease, payLoad : props})}><img src={removeIcon} alt=''/></button>
            <button className={styles.icon} onClick={add}><img src={addIcon} alt=''/></button>  
          </div> :
          <button onClick={() => dispatch({type : REDUCER_ACTION.addItem, payLoad : props})}>add to card</button> }
        </div>
    </div>
  )
}

export default EachProduct