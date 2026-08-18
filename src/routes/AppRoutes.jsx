
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../features/individual/Login'
import LandingPage from '../components/LandingPage'
import Signup from '../features/individual/Signup'
import Dashboard from '../features/individual/dashboard/Dashboard'

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/individual/login' element = {<Login />} />
        <Route path='/individual/signup' element = {<Signup />} />
        <Route path='/individual/dashboard' element = {<Dashboard />} />
      </Routes>

  )
}

export default AppRoutes
