import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import IndividualProvider from './context/IndividualProvider.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <IndividualProvider>
            <App />
        </IndividualProvider>
    </BrowserRouter>

)
