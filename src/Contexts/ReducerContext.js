import React, {createContext, useReducer} from 'react'

export const ReducerBodyContext = createContext()

export const REDUCER_ACTION = {
    addItem : 'ADDITEM', 
    removeItem : 'REMOVE_ITEM',
    increase : 'INCREASE', 
    decrease : 'DECREASE',
    clear : 'CLEAR',
    checkOut : 'CHECKOUT',
}

const initialState = {
    products : [],
    total: 0,
    isPayed : false
}

const sumNum = items => {
    const itemsCounter = items.reduce((total, products) => total + products.quantity, 0)
    const total = items.reduce((total, products) => total + products.quantity * products.price, 0).toFixed(2)

    return {itemsCounter, total}
}

const reducer = (state, action) => {
    switch (action.type) {
        case REDUCER_ACTION.addItem :
            if (!state.products.find(item => item.id === action.payLoad.id)) {
                state.products.push({
                    ...action.payLoad,
                    quantity: 1
                })
            }
            return {
                ...state,
                products: [...state.products],
                ...sumNum(state.products)
            }
        case REDUCER_ACTION.decrease : 
                const i = state.products.findIndex(each => each.id === action.payLoad.id)
                state.products[i].quantity--
                return {...state, ...sumNum(state.products)}
        case REDUCER_ACTION.increase : 
                const selected = state.products.findIndex(each => each.id === action.payLoad.id)
                state.products[selected].quantity++
                return {...state, ...sumNum(state.products)}
        case REDUCER_ACTION.removeItem : 
                const newSelected = state.products.filter(each => each.id !== action.payLoad.id)
                return {...state, products : [...newSelected], ...sumNum(state.products)}
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