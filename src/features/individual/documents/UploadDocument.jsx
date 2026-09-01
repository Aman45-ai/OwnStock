import { ArrowLeft, Calendar, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { IndividualContext } from '../../../context/IndividualContext'

const UploadDocument = () => {
  const { documents, setDocuments } = useContext(IndividualContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    const updatedDate = {
      ...data,
      uploadedOn: new Date().toISOString().split('T')[0]
    }
    const updatedData = [...documents,updatedDate]
    setDocuments(updatedData)
    const stringUpdatedDocuments = JSON.stringify(updatedData)
    localStorage.setItem("documents",stringUpdatedDocuments)
    navigate('/individual/documents')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='min-h-screen bg-[#0A111D] text-white'>
      <div className='max-w-5xl mx-auto px-6 py-6'>
        <div className='flex items-center gap-4 mb-7'>
          <button type='button' onClick={() => navigate(-1)} className='border border-zinc-700 rounded-xl p-2 cursor-pointer hover:border-[#13AEA8] hover:text-[#13AEA8] transition-all duration-200'>
            <ArrowLeft size={22} />
          </button>
          <div>
            <h1 className='text-3xl font-bold'>Upload Document</h1>
            <p className='text-sm text-zinc-500 mt-1'>Add an invoice, warranty, receipt or any other document.</p>
          </div>
        </div>

        <div className='bg-[#0F1825] border border-zinc-800 rounded-2xl overflow-hidden'>
          <div className='px-6 py-5 border-b border-zinc-800'>
            <div className='flex items-center gap-3'>
              <div className='bg-[#003C3D] text-[#13AEA8] p-2.5 rounded-xl'>
                <FileText size={21} />
              </div>
              <div>
                <h2 className='font-semibold text-lg'>Document Information</h2>
                <p className='text-xs text-zinc-500 mt-0.5'>Enter the details of your document.</p>
              </div>
            </div>
          </div>

          <div className='p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div className='md:col-span-2'>
                <label className='text-sm text-zinc-300'>Document Name</label>
                <input type='text' placeholder='e.g. MacBook Air M3 Invoice' {...register('name', {
                  required: 'Document name is required!',
                  minLength: {
                    value: 3,
                    message: 'Document name must be at least 3 characters'
                  }
                })} className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2.5 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8] transition-colors' />
                {errors.name && <p className='text-red-400 text-xs mt-1'>{errors.name.message}</p>}
              </div>

              <div>
                <label className='text-sm text-zinc-300'>Related Product</label>
                <select {...register('product', {
                  required: 'Please select a product'
                })} className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2.5 px-3 text-white focus:outline-none focus:border-[#13AEA8] cursor-pointer'>
                  <option value=''>Select product</option>
                  <option value='Laptop'>Laptop</option>
                  <option value='Mobile'>Mobile</option>
                  <option value='Television'>Television</option>
                  <option value='Kitchen'>Kitchen Appliances</option>
                  <option value='Others'>Others</option>
                </select>
                {errors.product && <p className='text-red-400 text-xs mt-1'>{errors.product.message}</p>}
              </div>

              <div>
                <label className='text-sm text-zinc-300'>Document Type</label>
                <select {...register('type', {
                  required: 'Please select a document type'
                })} className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2.5 px-3 text-white focus:outline-none focus:border-[#13AEA8] cursor-pointer'>
                  <option value=''>Select type</option>
                  <option value='Invoice'>Invoice</option>
                  <option value='Receipt'>Receipt</option>
                  <option value='Warranty'>Warranty</option>
                </select>
                {errors.type && <p className='text-red-400 text-xs mt-1'>{errors.type.message}</p>}
              </div>

              <div>
                <label className='text-sm text-zinc-300'>File Size</label>
                <div className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2.5 px-3 text-zinc-600'>
                  Calculated after upload
                </div>
              </div>
            </div>

            <div className='mt-6'>
              <label className='text-sm text-zinc-300'>Document File</label>
              <div className='mt-2 border border-dashed border-zinc-700 rounded-xl p-10 text-center bg-[#0D1521] hover:border-[#13AEA8] hover:bg-[#101A27] transition-all duration-300 cursor-pointer'>
                <div className='w-14 h-14 mx-auto rounded-xl bg-[#123337] border border-[#1B5555] flex items-center justify-center'>
                  <FileText size={28} className='text-[#13AEA8]' />
                </div>
                <h3 className='text-white font-medium mt-4'>Upload your document</h3>
                <p className='text-sm text-zinc-500 mt-1'>Drag and drop your file here or click to browse</p>
                <p className='text-xs text-zinc-600 mt-2'>PDF, JPG or PNG · Maximum file size 10MB</p>
              </div>
            </div>

            <div className='flex justify-end gap-3 mt-7 pt-6 border-t border-zinc-800'>
              <button type='button' onClick={() => navigate(-1)} className='px-6 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-all duration-200 cursor-pointer'>Cancel</button>
              <button type='submit' className='px-7 py-2.5 rounded-lg bg-[#13AEA8] text-white font-medium hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(0,222,218,0.18)] transition-all duration-300 cursor-pointer'>Upload Document</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default UploadDocument