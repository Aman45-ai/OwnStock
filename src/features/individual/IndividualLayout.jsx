import { Outlet } from 'react-router-dom'

const IndividualLayout = () => {

  return (
      <div className="min-h-screen">
        <main>
          <Outlet />
        </main>
      </div>
  )
}

export default IndividualLayout