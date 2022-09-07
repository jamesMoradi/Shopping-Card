import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './EachProduct.module.css'

//icons
import deleteIcon from '../Icons/delete.svg'
import addIcon from '../Icons/add.svg'

//context
import { ReducerBodyContext } from '../Contexts/ReducerContext'

//actions
import { REDUCER_ACTION } from '../Contexts/ReducerContext'

const EachProduct = props => {
    const {dispatch, state} = useContext(ReducerBodyContext)
    const {image, title, price, id} = props
    const titleInArray = title.split(' ')
    const newTitle = titleInArray[0] + '' + titleInArray[1]
    console.log(state);
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
            <img onClick={() => dispatch({type : REDUCER_ACTION.removeItem, payLoad : props})}  alt='' src={deleteIcon}/>  
            <img onClick={() => dispatch({type : REDUCER_ACTION.addItem, payLoad : props})}  alt='' src={addIcon}/>  
          </div> :
          <button onClick={() => dispatch({type : REDUCER_ACTION.addItem, payLoad : props})}>add to card</button> }
        </div>
    </div>
  )
}

export default EachProduct