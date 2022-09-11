import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

//MUI
import { Button, Typography, Card, CardContent, Container , Stack} from '@mui/material'

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
    const newTitle = titleInArray[0] + ' ' + titleInArray[1]

  return (
    <Card sx={{padding : '.5rem'}}>
        <img style={{width : '100%', height : '15rem'}} src={image} alt='' />
        <CardContent>
          <Container>
              <Typography variant='h6' container='h2'>{newTitle}</Typography>
              <Typography mb={8} variant='body1'>{price}$</Typography>
          </Container>
        </CardContent>
        <Stack
        justifyContent='space-between'
        direction='row'
        alignItems='center'>
        <Link to={`/products/${id}`}>Details</Link>
        {
          !!state.products.find(EachProduct => EachProduct.id === id) ? 
          <Container>
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
          </Container> :
          <Button 
          variant='contained' 
          color='primary' 
          size='small' 
          onClick={() => dispatch({type : REDUCER_ACTION.addItem, payLoad : props})}>add to card</Button> }
        </Stack>
    </Card>
  )
}

export default EachProduct