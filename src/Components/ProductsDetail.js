import React, { useContext, useEffect, useState } from 'react'
import {ProductsContext} from '../Contexts/DataContext'
import {useParams, useNavigate} from 'react-router-dom'

//MUI
import { Button, 
        Container, 
        Grid, 
        Card,
        Typography,
        CardHeader,
        CardContent,
        Stack,
        Paper
        } from '@mui/material'

const ProductsDetail = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const products = useContext(ProductsContext)
    const params = useParams()
    const navigate = useNavigate()
    const {image, title, category, price, description} = selectedProduct

    useEffect(() => {
        const product = products.find(EachProduct => EachProduct.id === +params.id)
        setSelectedProduct(product)
    }, [])

    const backHandler = () => {
        navigate(-1)
    }

  return (
        <Container>
            <Paper>
                <Grid
                my={5}
                container
                alignItems='center'
                justifyContent='center'>
                    <Grid
                    item
                    padding={2}
                    md={4}>
                        <Card>
                            <img
                            style={{width : '24rem'}}
                            alt=''
                            src={image}/>
                        </Card>
                    </Grid>
                    <Grid
                    item
                    padding={2}
                    md={8}>
                        <Card>
                            <CardHeader
                            title={title}
                            subheader={description}
                            color='primary'/>
                            <CardContent>
                                    <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={.5}>
                                        <Typography
                                        variant='body1'
                                        color='orangered'
                                        fontWeight={500}>category:
                                        </Typography>
                                        <Typography
                                        variant='body2'>
                                            {category}
                                        </Typography>
                                    </Stack>
                            </CardContent>
                            <Stack
                            sx={{padding : 1}}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}>
                                <Card
                                variant='span'>
                                    {price} $
                                </Card>
                                <Button
                                color='primary'
                                variant='contained'
                                onClick={backHandler}>
                                    back to shop
                                </Button>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
  )
}

export default ProductsDetail