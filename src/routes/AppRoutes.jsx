import { Routes, Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage'
import IndividualLayout from '../features/individual/IndividualLayout'
import Login from '../features/individual/Login'
import Signup from '../features/individual/Signup'
import Dashboard from '../features/individual/dashboard/Dashboard'
import MyProductsUI from '../features/individual/myProducts/MyProductsUI'
import AddProduct from '../features/individual/myProducts/AddProduct'
import DocumentContent from '../features/individual/documents/DocumentContent'
import UploadDocument from '../features/individual/documents/UploadDocument'
import InsuranceContent from '../features/individual/insurance/InsuranceContent'
import AddInsurance from '../features/individual/insurance/AddInsurance'
import ProductDetails from '../features/individual/myProducts/ProductPage'
import ProtectedRoute from './ProtectedRoutes'
import DocumentUi from '../features/individual/documents/DocumentUi'
import InsuranceUI from '../features/individual/insurance/InsuranceUI'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/individual/login" element={<Login />} />
            <Route path="/individual/signup" element={<Signup />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/individual" element={<IndividualLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="products" element={<MyProductsUI />} />
                    <Route path="new-product" element={<AddProduct />} />
                    <Route path="documents" element={<DocumentUi />} />
                    <Route path="upload-document" element={<UploadDocument />} />
                    <Route path="insurance" element={<InsuranceUI />} />
                    <Route path="add-insurance" element={<AddInsurance />} />
                    <Route path="product-page/:id" element={<ProductDetails />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes