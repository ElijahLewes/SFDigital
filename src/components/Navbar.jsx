import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link id="navbar-logo" to="/">Streetfront Digital</Link>
      </div>
      <div className="navbar-links">
        <Link className="nav-btn" to="/team">Team</Link>
        <Link className="nav-btn" to="/contact">Contact Us</Link>
        <Link className="nav-btn" to="/link212">Link 212</Link>
        {/* Add dropdown for individual project page? */}
      </div>
    </nav>
  );
}

export default Navbar;