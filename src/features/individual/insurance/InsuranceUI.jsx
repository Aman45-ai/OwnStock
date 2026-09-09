import Sidebar from '../Sidebar'
import InsuranceBar from './InsuranceBar'
import InsuranceContent from './InsuranceContent'


const InsuranceUI = () => {
  return (
    <div className='lg:grid lg:grid-cols-[220px_1fr] min-h-screen bg-[#01060D]'>
      <Sidebar />
      <div className='bg-[#01060D] min-h-screen px-5'>
        <InsuranceBar />
        <InsuranceContent />
      </div>
    </div>
  )
}

export default InsuranceUI
