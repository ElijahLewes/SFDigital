import { useState } from 'react'
import './App.css'
import OnPageLoad from './components/OnPageLoad.jsx'
import  Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Link212 from './pages/Link212.jsx'
import Team from './pages/Team.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Remington from './pages/NeighborhoodPages/Remington.jsx'
import { Route, Routes } from 'react-router-dom'
//import Link212 from './pages/Link212.jsx' // Uncomment if you want to use

//doubles as landign page

//Components: states, hooks, logic, ui

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/link212" element={<Link212 />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/neighborhoods/remington" element={<Remington />} />
        {/* Add more routes as needed */}
      </Routes>
     <OnPageLoad /> 

    </>
  )
}

export default App
