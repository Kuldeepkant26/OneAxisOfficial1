import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Interior from './pages/interior'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/interior' element={<Interior />}></Route>
      </Routes>

    </>
  )
}

export default App
