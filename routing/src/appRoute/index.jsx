import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import PageNot from '../pages/PageNot'

const AppRouter = () => {
  return (
    <div>
      
       <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='*' element={<PageNot/>}/>


       </Routes>
    
      
    </div>
  )
}

export default AppRouter
