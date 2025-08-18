import { useState } from 'react'
import './App.css'
import OnPageLoad from './components/OnPageLoad.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Link212 from './pages/Link212.jsx'
import Team from './pages/Team.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Remington from './pages/NeighborhoodPages/Remington.jsx'
import Footer from './components/Footer.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Navbar shows for all routes except Home, which has its own HomeNavBar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/link212" element={<><Navbar /><Link212 /></>} />
        <Route path="/team" element={<><Navbar /><Team /></>} />
        <Route path="/contact" element={<><Navbar /><ContactUs /></>} />
        <Route path="/neighborhoods/remington" element={<><Navbar /><Remington /></>} />
      </Routes>

      <Footer />
      <OnPageLoad />
    </>
  )
}

export default App
