import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'
import Login from './Login'
import Error from '../../src/Error404'

function Router() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path ='/' element={<Home/>}></Route>
          <Route path ='/Contact' element={<Contact/>}></Route>
          <Route path ='/About' element={<About/>}></Route>
          <Route path ='/Login' element={<Login/>}></Route>
          <Route path ='*' element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default Router
