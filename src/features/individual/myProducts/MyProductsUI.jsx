import Sidebar from '../Sidebar'
import ProductBar from './ProductBar'
import ProductContent from './ProductContent'

const MyProductsUI = () => {
  return (
    <div className='grid grid-cols-[220px_1fr] '>
      <Sidebar />
      <div className='bg-[#01060D] min-h-screen'>
        <ProductBar />
        <ProductContent />
      </div>
    </div>
  )
}

export default MyProductsUI
