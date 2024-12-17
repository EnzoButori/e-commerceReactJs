import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    // <>
    //   <div>
    //     <NavBar />
    //     <ItemListContainer bg='gray' colorTexto='white' />
    //   </div>
    // </>
    <BrowserRouter>
     <NavBar />
     <Routes>
       <Route path="/home" element={<ItemListContainer />} />
     </Routes>
   </BrowserRouter>
    
  )
}

export default App
