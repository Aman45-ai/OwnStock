import DashboardContent from "./DashboardContent"
import Sidebar from "../Sidebar"

const Dashboard = () => {

  return (
    <div className='lg:grid lg:grid-cols-[220px_1fr] min-h-screen bg-[#01060D] '>
      <Sidebar />
      <div className='min-w-0 p-3'>
        <DashboardContent />
      </div>
    </div>
  )
}

export default Dashboard