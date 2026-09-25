import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../tailwind.css'
import DiscbotDashboard from './screens/DiscbotDashboard'
import AboutMe from './screens/AboutMe/AboutMe'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DiscbotDashboard />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
