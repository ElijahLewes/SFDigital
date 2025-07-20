import { useState } from 'react'
import './App.css'
import  Navbar from './components/Navbar.jsx'

//doubles as landign page

//Components: states, hooks, logic, ui

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="page-container">
      {/*Right side of home page*/}
        <div id="home-title-container" style={({display: 'flex', width:'50%', flexDirection:'column', alignItems: 'center', justifyContent: 'flex-start', float:'left',})}>

           <h1 id="home-title">Welcome to SF Digital</h1>
          <p id="home-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      {/*Left side of home page*/}
        <div id="home-project-cards-container" style={{display: 'flex', width:'50%',  alignItems: 'center', justifyContent: 'center', float:'right'}}>
          <div className="home-project-card" style={{background: 'var(--green-base)', color: 'var(--text-light)'}}>
           <h2>Project 1</h2>
            <p>Brief description of Project 1.</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
