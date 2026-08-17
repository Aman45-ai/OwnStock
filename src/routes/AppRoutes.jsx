
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../features/individual/Login'
import LandingPage from '../components/LandingPage'
import Signup from '../features/individual/Signup'

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/individual/login' element = {<Login />} />
        <Route path='/individual/signup' element = {<Signup />} />
      </Routes>

  )
}

export default AppRoutes
