import { useState } from 'react'
import './App.css'
import  Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Link212 from './pages/Link212.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
        <Route path="/team" element={<div>Meet the Team Page</div>} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  )
}

export default App
