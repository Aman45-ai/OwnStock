
import { useNavigate } from 'react-router-dom'

const DocumentBar = () => {
  const navigate = useNavigate()
  return (
    <div className='px-5 py-3'>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3'>        <div>
        <h3 className='text-3xl sm:text-4xl font-bold text-white'>Documents</h3>
        <p className='text-zinc-400 pt-1 text-sm'>Store and access all your important documents in one place.</p>
      </div>
        <div>
          <button className='text-white bg-[#13AEA8] px-5 py-2 rounded-lg text-lg cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(0,222,218,0.25)] transition-all duration-300' onClick={() => {
            navigate('/individual/upload-document')
          }}>
            Upload Document
          </button>
        </div>
      </div>
    </div>
  )
}

export default DocumentBar
