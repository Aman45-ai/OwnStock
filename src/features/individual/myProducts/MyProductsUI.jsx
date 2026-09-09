import { useState } from 'react'
import Sidebar from '../Sidebar'
import ProductBar from './ProductBar'
import ProductContent from './ProductContent'

const MyProductsUI = () => {
  const [search,setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [status, setStatus] = useState("all")
  return (
    <div className='lg:grid lg:grid-cols-[220px_1fr] bg-[#01060D]'>
      <Sidebar />
      <div className='bg-[#01060D] min-h-screen p-4.5 '>
        <ProductBar setSearch={setSearch} setCategory={setCategory} setStatus={setStatus}/>
        <ProductContent search={search} category={category} status={status} />
      </div>
    </div>
  )
}

export default MyProductsUI
