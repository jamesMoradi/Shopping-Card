import React from 'react'
import {Routes, Route} from 'react-router-dom'

//context
import BodyContext from './Contexts/DataContext'
import ReducerContext from './Contexts/ReducerContext'

//components
import NavBar from './Components/NavBar'
import Orders from './Components/Orders'
import Landing from './Components/Landing'
import ProductsDetail from './Components/ProductsDetail'

const App = () => {
  return (
    <BodyContext>
      <ReducerContext>
        <NavBar />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/products/:id' element={<ProductsDetail />}/>
          <Route path='/orders/' element={<Orders/>}/>
        </Routes>
      </ReducerContext>
    </BodyContext>
  )
}

export default App