import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import PageNot from '../pages/PageNot'
import AppLayout from '../components/AppLayout'
import Profile from '../pages/Profile'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route  path='/' element={<AppLayout><Home/></AppLayout>}/>
        <Route path='/about' element={<AppLayout><About/></AppLayout>}/>
        <Route path='/services' element={<AppLayout><Services/></AppLayout>}/>
        <Route path='/profile/:username' element={<AppLayout><Profile/></AppLayout>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='*' element={<PageNot/>}/>


       </Routes>
       </BrowserRouter>
    
      
    </div>
  )
}

export default AppRouter
