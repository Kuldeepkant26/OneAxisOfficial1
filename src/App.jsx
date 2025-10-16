import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Interior from './pages/interior'
import Services from './pages/Services'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/interior' element={<Interior />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/careers' element={<Careers />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

    </>
  )
}

export default App
