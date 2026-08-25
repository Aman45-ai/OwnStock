import Sidebar from '../Sidebar'
import DocumentBar from './DocumentBar'
import DocumentContent from './DocumentContent'

const DocumentUi = () => {
  return (
    <div className='grid grid-cols-[220px_1fr]'>
      <Sidebar />
      <div className='bg-[#01060D] min-h-screen'>
        <DocumentBar />
        <DocumentContent />
      </div>
    </div>
  )
}

export default DocumentUi
