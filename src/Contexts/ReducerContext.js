import React, {createContext, useReducer} from 'react'

export const ReducerBodyContext = createContext()

export const REDUCER_ACTION = {
    addItem : 'ADDITEM', 
    removeItem : 'REMOVEITEM', 
    clear : 'CLEAR',
    checkOut : 'CHECKOUT'
}

const initialState = {
    products : [],
    productsCount : 0,
    total: 0,
    isPayed : false
}

const reducer = (state, action) => {
    switch (action.type) {
        case REDUCER_ACTION.addItem :
            return {...state, products : [...state.products, {id : action.payLoad.id,
                price : action.payLoad.price,
                title : action.payLoad.title}],
                total : state.productsCount + 1}
        case REDUCER_ACTION.removeItem: 
            return {...state, 
                products : [...state.products.filter(each => each.id !== action.payLoad.id)],
                total : state.total - 1}
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