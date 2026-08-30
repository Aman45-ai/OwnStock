import { Routes, Route } from 'react-router-dom'
import Login from '../features/individual/Login'
import LandingPage from '../components/LandingPage'
import Signup from '../features/individual/Signup'
import IndividualLayout from '../features/individual/IndividualLayout'
import Dashboard from '../features/individual/Dashboard/Dashboard'
import MyProductsUI from '../features/individual/myProducts/MyProductsUI'
import AddProduct from '../features/individual/myProducts/AddProduct'
import DocumentUi from '../features/individual/documents/DocumentUi'
import UploadDocument from '../features/individual/documents/UploadDocument'
import InsuranceUI from '../features/individual/insurance/InsuranceUI'
import AddInsurance from '../features/individual/insurance/AddInsurance'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/individual/login' element={<Login />} />
      <Route path='/individual/signup' element={<Signup />} />
      
      <Route path="/individual" element={<IndividualLayout />} >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<MyProductsUI />} />
        <Route path="new-product" element={<AddProduct />} />
        <Route path="documents" element={<DocumentUi />} />
        <Route path="upload-document" element={<UploadDocument />} />
        <Route path="insurance" element={<InsuranceUI />} />
        <Route path="add-insurance" element={<AddInsurance />} />
      </Route>
    </Routes>

  )
}

export default AppRoutes
