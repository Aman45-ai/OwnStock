import { ArrowLeft, Calendar, FileText, Package, ShieldCheck, Store } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { IndividualContext } from '../../../context/IndividualContext'

const UploadDocument = () => {
  const { documents,setDocuments } = useContext(IndividualContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    setDocuments([...documents,data])
    navigate('/individual/documents')
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
          <h1 className='text-3xl font-bold'> Upload Document </h1>
          <p className='text-sm text-zinc-400 mt-1'>Add an invoice, warranty, receipt or any other document.</p>
        </div>
      </div>
      <div className='flex justify-center px-5 py-3 w-150 mx-auto'>
        <div className='w-full mx-w-175 '>
          <div className='bg-[#0F1825] border border-zinc-800 rounded-xl p-5'>
            <div className='flex items-center gap-3 mb-5'>
              <div className='bg-[#003C3D] text-[#13AEA8] p-2 rounded-lg'> <Package size={20} /> </div>
              <div>
                <h2 className='font-semibold text-lg'>Document Information </h2>
              </div>
            </div>
            <div className='space-y-4'>
              <div>
                <label className='text-sm text-zinc-300'>Document Name</label>
                <input
                  type='text'
                  placeholder='e.g. MacBook Air M3'
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
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='text-sm text-zinc-300'> Document Type </label>
                  <select className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8] cursor-pointer' {...register("type")}>
                    <option value="invoice">Invoice</option>
                    <option value="receipt">Receipt</option>
                    <option value="warranty">Warranty</option>
                  </select>

                  {errors.type && (<p className='text-red-400 text-xs mt-1'>{errors.type.message} </p>)}
                </div>

                <div>
                  <label className='text-sm text-zinc-300'>Category</label>

                  <select
                    {...register('category', {
                      required: 'Please select a category'
                    })}
                    className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white focus:outline-none focus:border-[#13AEA8]'
                  >
                    <option value=''>Select category</option>
                    <option value='laptop'>Laptop</option>
                    <option value='mobile'>Mobile</option>
                    <option value='television'>Television</option>
                    <option value='kitchen'>Kitchen Appliances</option>
                    <option value='others'>Others</option>
                  </select>

                  {errors.category && (<p className='text-red-400 text-xs mt-1'> {errors.category.message} </p>)}
                </div>
              </div>
              <div>
                <label className='text-sm text-zinc-300'>
                  Invoice / Warranty Document
                </label>
                <div className='mt-1 border border-dashed border-zinc-700 rounded-lg p-5 text-center bg-[#0D1521] hover:border-[#13AEA8] transition-colors cursor-pointer'>
                  <FileText className='mx-auto text-zinc-500' size={28} />
                  <p className='text-sm text-zinc-400 mt-2'>
                    Upload invoice or warranty document
                  </p>
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

export default UploadDocument