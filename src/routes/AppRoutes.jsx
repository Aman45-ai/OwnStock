import { Routes, Route } from 'react-router-dom'
import Login from '../features/individual/Login'
import LandingPage from '../components/LandingPage'
import Signup from '../features/individual/Signup'
import Dashboard from '../features/individual/Dashboard/Dashboard'
import MyProductsUI from '../features/individual/myProducts/MyProductsUI'
import AddProduct from '../features/individual/myProducts/AddProduct'
import DocumentUi from '../features/individual/documents/DocumentUi'

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/individual/login' element = {<Login />} />
        <Route path='/individual/signup' element = {<Signup />} />
        <Route path='/individual/dashboard' element = {<Dashboard />} />
        <Route path='/individual/products' element = {<MyProductsUI />} />
        <Route path='/individual/new-product' element = {<AddProduct />} />
        <Route path='/individual/documents' element = {<DocumentUi />} />
      </Routes>

  )
}

export default AppRoutes
