import Sidebar from '../Sidebar'
import InsuranceBar from './InsuranceBar'
import InsuranceContent from './InsuranceContent'


const InsuranceUI = () => {
  return (
    <div className='grid grid-cols-[220px_1fr]'>
      <Sidebar />
      <div className='bg-[#01060D] min-h-screen'>
        <InsuranceBar />
        <InsuranceContent />
      </div>
    </div>
  )
}

export default InsuranceUI
