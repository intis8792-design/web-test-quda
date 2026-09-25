import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../tailwind.css'
import DiscbotDashboard from './screens/DiscbotDashboard'
import AboutMe from './screens/AboutMe/AboutMe'
import BotDiscord from './screens/BotDiscord/BotDiscord'
import GaleriFoto from './screens/GaleriFoto/GaleriFoto'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DiscbotDashboard />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/bot-discord" element={<BotDiscord />} />
        <Route path="/galeri-foto" element={<GaleriFoto />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
