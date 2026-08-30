import { Outlet } from 'react-router-dom'
import IndividualProvider from '../../context/IndividualProvider'


const IndividualLayout = () => {

  return (
    <IndividualProvider>
      <div className="min-h-screen">
        <main>
          <Outlet />
        </main>
      </div>
    </IndividualProvider>
  )
}

export default IndividualLayout