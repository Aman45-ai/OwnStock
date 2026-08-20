import DashboardContent from "./DashboardContent"
import DashboardNavbar from "./DashboardNavbar"
import Sidebar from "../Sidebar"



const Dashboard = () => {
  return (
    <div className='grid grid-cols-[220px_1fr] '>
      <Sidebar />
      <div>
        <DashboardNavbar />
        <DashboardContent />
      </div>
    </div>
  )
}

export default Dashboard
