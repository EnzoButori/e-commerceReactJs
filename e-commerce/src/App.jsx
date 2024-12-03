import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer bg='gray' colorTexto='white' />
      </div>
    </>
    
  )
}

export default App
