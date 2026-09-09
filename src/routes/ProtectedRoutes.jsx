import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { IndividualContext } from '../context/IndividualContext'

const ProtectedRoute = () => {
    const { currentUser } = useContext(IndividualContext)

    return currentUser ? <Outlet /> : <Navigate to="/individual/login" replace />
}

export default ProtectedRoute