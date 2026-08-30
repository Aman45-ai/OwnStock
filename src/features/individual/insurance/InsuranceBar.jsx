import React from 'react'
import { useNavigate } from 'react-router-dom'

const InsuranceBar = () => {
  const navigate = useNavigate()
  return (
    <div className='px-5 py-3'>
      <div className='flex justify-between items-center'>
        <div>
            <h3 className='text-4xl font-bold text-white '>Insurance</h3>
            <p className='text-zinc-400 pt-1 text-sm'>Manage and track your product insurance policies and coverage.</p>
        </div>
        <div>
            <button className='text-white bg-[#13AEA8] px-5 py-2 rounded-lg text-lg cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(0,222,218,0.25)] transition-all duration-300' onClick={()=>{
              navigate('/individual/add-insurance')
            }}>
                Add Insurance
            </button>
        </div>
      </div>
    </div>
  )
}

export default InsuranceBar
