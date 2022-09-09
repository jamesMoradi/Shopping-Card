import React, {createContext, useReducer} from 'react'

export const ReducerBodyContext = createContext()

export const REDUCER_ACTION = {
    addItem : 'ADDITEM', 
    removeItem : 'REMOVEITEM',
    increase : 'INCREASE', 
    decrease : 'DECREASE',
    clear : 'CLEAR',
    checkOut : 'CHECKOUT'
}

const initialState = {
    products : [],
    total: 0,
    isPayed : false
}

export const calculatingTotalPrice = (products, setTotalPrice) => {
    let num = 0
    const total = products.map(each => num += each.quantity * each.price)
    setTotalPrice(total)
}

export const calculationProductsQuantity = (products,setTotalProducts) => {
    const totalProducts = [] 
    products.map(each => totalProducts.push(each.quantity))
    let newNum = 0
    for(let i = 0 ; totalProducts.length ; i++) {
      newNum += totalProducts[i]
    }

    setTotalProducts(newNum)
}

const reducer = (state, action) => {
    switch (action.type) {
        case REDUCER_ACTION.addItem :
            return {...state, products : [...state.products, {id : action.payLoad.id,
                price : action.payLoad.price,
                title : action.payLoad.title,
                image : action.payLoad.image,
                quantity : 1}]}
        case REDUCER_ACTION.decrease : 
                const i = state.products.findIndex(each => each.id === action.payLoad.id)
                state.products[i].quantity--
                return {...state}
        case REDUCER_ACTION.increase : 
                const selected = state.products.findIndex(each => each.id === action.payLoad.id)
                state.products[selected].quantity++
                return {...state}
        case REDUCER_ACTION.removeItem : 
                const newSelected = state.products.filter(each => each.id !== action.payLoad.id)
                return {...state, products : [...newSelected]}
        case REDUCER_ACTION.clear : return {
            products : [], 
            total : 0,
            productsCount : 0,
            isPayed : false
        }
        case REDUCER_ACTION.checkOut : return {
           products : [], 
           total : 0,
           productsCount : 0,
           isPayed : true
        }
        default: return state
    }
}

const ReducerContext = (props) => {
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <ReducerBodyContext.Provider value={{state, dispatch}}>
        {props.children}
    </ReducerBodyContext.Provider>
  )
}

export default ReducerContext