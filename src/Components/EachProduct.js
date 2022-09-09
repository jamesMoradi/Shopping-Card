import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './EachProduct.module.css'

//MUI
import { Button } from '@mui/material'

//icons
import { DeleteOutline, AddOutlined, RemoveOutlined } from '@mui/icons-material'

//context
import { ReducerBodyContext } from '../Contexts/ReducerContext'

//actions
import { REDUCER_ACTION } from '../Contexts/ReducerContext'

const EachProduct = props => {
    const {dispatch, state} = useContext(ReducerBodyContext)
    const {image, title, price, id} = props
    const titleInArray = title.split(' ')
    const newTitle = titleInArray[0] + '' + titleInArray[1]

  return (
    <div className={styles.CardContainer}>
        <img src={image} alt='' />
        <div>
            <h2>{newTitle}</h2>
            <span>{price}$</span>
        </div>
        <div className={styles.btnContainer}>
        <Link to={`/products/${id}`}>Details</Link>
        {
          !!state.products.find(EachProduct => EachProduct.id === id) ? 
          <div>
            {state.products.filter(each => each.id === id)[0].quantity > 1 ? 
            <Button 
            variant='contained' 
            color='primary'
            onClick={() => dispatch({type : REDUCER_ACTION.decrease, payLoad : props})}>
              <RemoveOutlined fontSize='small'/>
            </Button> :
            <Button 
            variant='contained' 
            onClick={() => dispatch({type : REDUCER_ACTION.removeItem, payLoad : props})}>
              <DeleteOutline  fontSize='small'/>
            </Button>
            }
            <Button 
            variant='contained' 
            onClick={() => dispatch({type : REDUCER_ACTION.increase, payLoad : props})}>
              <AddOutlined fontSize='small' />
              </Button>  
          </div> :
          <Button 
          variant='contained' 
          color='primary' 
          size='small' 
          onClick={() => dispatch({type : REDUCER_ACTION.addItem, payLoad : props})}>add to card</Button> }
        </div>
    </div>
  )
}

export default EachProduct