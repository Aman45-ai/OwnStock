import DashboardContent from "./DashboardContent"
import Sidebar from "../Sidebar"



const Dashboard = () => {
  return (
    <div className='grid grid-cols-[220px_1fr] h-screen'>
      <Sidebar />
      <div>
        <DashboardContent />
      </div>
    </div>
  )
}

export default Dashboard
