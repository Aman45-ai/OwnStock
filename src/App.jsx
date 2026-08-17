import React from 'react'
import LandingPage from './components/LandingPage'
import AppRoutes from './routes/AppRoutes'
import { Toaster } from "sonner"

const App = () => {
  return (
    <div>
      <AppRoutes />
      <Toaster
        toastOptions={{
          classNames: {
            toast: "!bg-[#003241] !text-white !border-[#019F8F]",
            success: "!text-white",
            error: "!text-red-400",
          },
        }} />
    </div>
  )
}

export default App
