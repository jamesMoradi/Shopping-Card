import React from 'react'
import Landing from './Components/Landing'
import BodyContext from './Contexts/DataContext'

const App = () => {
  return (
    <BodyContext>
      <Landing />
    </BodyContext>
  )
}

export default App