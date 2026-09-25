import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../tailwind.css'
import DiscbotDashboard from './screens/DiscbotDashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DiscbotDashboard />
  </StrictMode>,
)
