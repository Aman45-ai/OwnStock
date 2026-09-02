
import WelcomeSection from './dasboardComponent.jsx/WelcomeSection'
import StatsCards from './dasboardComponent.jsx/StatsCards'
import RecentProducts from './dasboardComponent.jsx/RecentProducts'
import QuickActions from './dasboardComponent.jsx/QuickActions'
import WarrantyOverview from './dasboardComponent.jsx/WarrantyOverview'
import InsuranceOverview from './dasboardComponent.jsx/InsuranceOverview'
import ExpiringSoon from './dasboardComponent.jsx/ExpiringSoon'
import DocumentOverview from './dasboardComponent.jsx/DocumentOverview'


const DashboardContent = () => {


  return (
    <div className='bg-[#00070F] h-full '>
      <div className='max-w-[1600px] w-full mx-auto py-5'>
        <WelcomeSection />
        <StatsCards />
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-2 py-2 px-5'>
          <RecentProducts />
          <QuickActions />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 py-2 px-5 h-full'>
          <WarrantyOverview />
          <DocumentOverview />
          <ExpiringSoon />
          <InsuranceOverview />
        </div>
      </div>

    </div>
  )
}

export default DashboardContent
