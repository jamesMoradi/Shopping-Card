import React from 'react'
import {Routes, Route} from 'react-router-dom'

//context
import Landing from './Components/Landing'
import BodyContext from './Contexts/DataContext'
import ProductsDetail from './Components/ProductsDetail'
import ReducerContext from './Contexts/ReducerContext'

//components
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <BodyContext>
      <ReducerContext>
        <NavBar />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/products/:id' element={<ProductsDetail />}/>
        </Routes>
      </ReducerContext>
    </BodyContext>
  )
}

export default App