import Sidebar from '../Sidebar'
import DocumentBar from './DocumentBar'
import DocumentContent from './DocumentContent'

const DocumentUi = () => {

  return (
    <div className='lg:grid lg:grid-cols-[220px_1fr] min-h-screen bg-[#01060D] '>
      <Sidebar />
      <div className='bg-[#01060D] min-h-screen p-5'>
        <DocumentBar />
        <DocumentContent />
      </div>
    </div>
  )
}

export default DocumentUi