import { useState } from 'react'
import './App.css'
import  Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter } from 'react-router-dom'
//import Link212 from './pages/Link212.jsx' // Uncomment if you want to use

//doubles as landign page

//Components: states, hooks, logic, ui

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      
    </>
  )
}

export default App
