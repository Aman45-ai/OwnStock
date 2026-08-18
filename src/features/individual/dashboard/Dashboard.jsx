import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import DashboardNavbar from './DashboardNavbar'
import DashboardContent from './DashboardContent'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-[220px_1fr]'>
      <DashboardSidebar />
      <div>
        <DashboardNavbar />
        <DashboardContent />
      </div>
    </div>
  )
}

export default Dashboard
