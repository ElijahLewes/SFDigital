import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link id="navbar-logo" to="/pages/Home">Logo</Link>
      </div>
      <div className="navbar-links">
        
        <Link className="nav-btn" to="/pages/Team">Team</Link>
        <Link className="nav-btn" to="/pages/ContactUs">Contact Us</Link>
        <Link className="nav-btn" to="/pages/Link212">Link 212</Link>
      </div>
    </nav>
  );
}

export default Navbar;