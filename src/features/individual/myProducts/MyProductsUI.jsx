import { useState } from 'react'
import Sidebar from '../Sidebar'
import ProductBar from './ProductBar'
import ProductContent from './ProductContent'

const MyProductsUI = () => {
  const [search,setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [status, setStatus] = useState("all")
  return (
    <div className='grid grid-cols-[220px_1fr]'>
      <Sidebar />
      <div className='bg-[#01060D] min-h-screen'>
        <ProductBar setSearch={setSearch} setCategory={setCategory} setStatus={setStatus}/>
        <ProductContent search={search} category={category} status={status} />
      </div>
    </div>
  )
}

export default MyProductsUI
