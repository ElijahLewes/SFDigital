
import { useState } from 'react'
import { AnimatePresence } from "framer-motion";
import Landing from './pages/Landing.jsx'
import './css/App.scss'
import OnPageLoad from './components/OnPageLoad.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Link212 from './pages/Link212.jsx'
import Team from './pages/Team.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Remington from './pages/NeighborhoodPages/Remington.jsx'
import Footer from './components/Footer.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import 'flowbite';
import { i } from 'framer-motion/client';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  return (
    <>
      {/* Navbar shows for all routes except Home, which has its own HomeNavBar */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<><Navbar /><Home /></>} />
          <Route path="/link212" element={<><Navbar /><Link212 /></>} />
          <Route path="/team" element={<><Navbar /><Team /></>} />
          <Route path="/contact" element={<><Navbar /><ContactUs /></>} />
        <Route path="/neighborhoods/remington" element={<><Navbar /><Remington /></>} />
      </Routes>

      <Footer />
      <OnPageLoad />
    </AnimatePresence>
  </>
  );
}

export default App
