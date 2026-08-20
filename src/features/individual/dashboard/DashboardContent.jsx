
import WelcomeSection from './dasboardComponent.jsx/WelcomeSection'
import StatsCards from './dasboardComponent.jsx/StatsCards'


const DashboardContent = () => {
  

  return (
    <div className='bg-[#00070F]'>
      <div className='max-w-[1600px] w-full mx-auto'>
        <WelcomeSection />
        <StatsCards />
      </div>

    </div>
  )
}

export default DashboardContent
