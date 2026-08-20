import { Search } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

const DashboardNavbar = () => {
  const { register } = useForm()

  return (
    <div className='bg-[#01060B] p-2'>
      <div className='w-full max-w-125 flex justify-center items-center border border-[#474d61] px-2 py-1 rounded-sm gap-2'>
        <Search size={18} className='text-zinc-500'/>
        <input type="text" placeholder='Search products, warranties, documents' {...register("search")} className='placeholder:text-zinc-500 w-full bg-transparent text-white focus:outline-none'/>
      </div>
    </div>
  )
}

export default DashboardNavbar
