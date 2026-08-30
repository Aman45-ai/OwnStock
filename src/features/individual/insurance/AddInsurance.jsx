import { ArrowLeft, Calendar, FileText, Package, ShieldCheck, Store } from 'lucide-react'
import logo from '../../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const AddInsurance = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    navigate('/individual/products')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='min-h-screen bg-[#0A111D] text-white'>


      <div className='flex px-5 py-4 items-center gap-3'>
        <button type='button' onClick={() => navigate(-1)} className='border border-zinc-600 rounded-xl p-1.5 cursor-pointer hover:border-[#13AEA8] hover:text-[#13AEA8] transition-all duration-200'>
          <ArrowLeft size={24} />
        </button>

        <div>
          <h1 className='text-3xl font-bold'> Add Insurance </h1>
          <p className='text-sm text-zinc-400 mt-1'>Add an insurance policy to protect your product</p>
        </div>
      </div>
      <div className='flex justify-center px-5 py-3 w-150 mx-auto'>
        <div className='w-full mx-w-175 '>
          <div className='bg-[#0F1825] border border-zinc-800 rounded-xl p-5'>
            <div className='flex items-center gap-3 mb-5'>
              <div className='bg-[#003C3D] text-[#13AEA8] p-2 rounded-lg'> <Package size={20} /> </div>
              <div>
                <h2 className='font-semibold text-lg'>Insurance Information</h2>
              </div>
            </div>
            <div className='space-y-4'>
              <div>
                <label className='text-sm text-zinc-300'>Insurance Provider</label>
                <input
                  type='text'
                  placeholder='e.g. AppleCare+, HDFC ERGO'
                  {...register('name', {
                    required: 'Product name is required!',
                    minLength: {
                      value: 3,
                      message: 'Product name must be at least 3 characters'
                    }
                  })}
                  className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8] transition-colors'
                />
                {errors.name && (<p className='text-red-400 text-xs mt-1'> {errors.name.message} </p>
                )}
              </div>
              <div>
                <label className='text-sm text-zinc-300'>Policy Number</label>
                <input
                  type='text'
                  placeholder='e.g. ACPL123456789'
                  {...register('policy', {
                    required: 'Policy Number is required!',
                  })}
                  className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8] transition-colors'
                />
                {errors.policy && (<p className='text-red-400 text-xs mt-1'> {errors.policy.message} </p>
                )}
              </div>
              <div>
                <label className='text-sm text-zinc-300'>Coverage Amount(₹)</label>
                <input
                  type='number'
                  placeholder='e.g. 114000'
                  {...register('amount', {
                    required: 'Coverage amount is required!',
                  })}
                  className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8] transition-colors'
                />
                {errors.amount && (<p className='text-red-400 text-xs mt-1'> {errors.amount.message} </p>
                )}
              </div>
              <div>
                <label className='text-sm text-zinc-300'>
                  Invoice / Warranty Document
                </label>
                <div className='mt-1 border border-dashed border-zinc-700 rounded-lg p-5 text-center bg-[#0D1521] hover:border-[#13AEA8] transition-colors cursor-pointer'>
                  <FileText className='mx-auto text-zinc-500' size={28} />
                  <p className='text-sm text-zinc-400 mt-2'>Upload insurance policy document</p>
                  <p className='text-xs text-zinc-600 mt-1'> PDF, JPG or PNG </p>
                </div>
                <div className='flex justify-center items-center gap-5 pt-5 text-white'>
                  <button className='bg-red-700 border border-zinc-700 px-15 py-2 w-1/2 rounded-sm cursor-pointer  hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(120,6,6,0.75)] transition-all duration-300'>Cancel</button>
                  <button className='bg-[#00CAB7] border border-zinc-700 px-10 py-2 w-1/2 rounded-sm cursor-pointer  hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(0,222,218,0.25)] transition-all duration-300'>Upload Document</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddInsurance