import React, {useContext} from 'react'
import styles from './OrdersList.module.css'

//MUI
import {Button} from '@mui/material'

//icons
import { DeleteOutline, AddOutlined, RemoveOutlined } from '@mui/icons-material'

//context
import { ReducerBodyContext } from '../Contexts/ReducerContext'
import { REDUCER_ACTION } from '../Contexts/ReducerContext'

const OrdersList = props => {
    const {dispatch} = useContext(ReducerBodyContext)
    const {image, title, price, quantity} = props.data
    const titleInArray = title.split(' ')
    const newTitle = titleInArray[0] + ' ' + titleInArray[1]
  return (
    <div className={styles.orederListContainer}>
        <img className={styles.orederImage} alt='' src={image}/>
        <div>
            <span className={styles.orderTitle}>{newTitle}</span>
            <span className={styles.orderPrice}>{price} $</span>
        </div>
        <span className={styles.orderQuantity}>{quantity}</span>
        <div className={styles.btnsContainer}>
            {quantity === 1 ? 
            <Button 
            variant='contained'
            size='small'
            mx={2}
            color='primary'
            onClick={() => dispatch({type : REDUCER_ACTION.removeItem, payLoad: props.data})}>
                <DeleteOutline  fontSize='small'/>
            </Button> : 
            <Button 
            variant='contained'
            size='small'
            mx={2}
            color='primary'
            onClick={() => dispatch({type : REDUCER_ACTION.decrease, payLoad: props.data})}>
                <RemoveOutlined fontSize='small'/>
            </Button> }
            <Button 
            variant='contained'
            size='small'
            mx={2}
            color='primary'
            onClick={() => dispatch({type : REDUCER_ACTION.increase, payLoad: props.data})}>
                <AddOutlined fontSize='small'/>
            </Button>
        </div>
    </div>
  )
}

export default OrdersList