import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


// Navbar button logic
function NavLink212() {
  const navigate = useNavigate();

  const goToLink212 = () => {
    navigate('/link212');
  };

  return (
    <button onClick={goToLink212} className="nav-btn">
      Link 212
    </button>
  );
}

function NavContactUs() {
  const navigate = useNavigate();

  const goToContactUs = () => {
    navigate('/contact');
  };

  return (
    <button onClick={goToContactUs} className="nav-btn">
      Contact Us
    </button>
  );
}


function NavTeam() {
  const navigate = useNavigate();

  const goToTeam = () => {
    navigate('/team');
  };

  return (
    <button onClick={goToTeam} className="nav-btn">
      Meet the Team
    </button>
  );
}

// Actual Navbar component

function Navbar() {
  return (
    <nav className="navbar fixed">
      <div className="logo-container">
        <Link id="navbar-logo" to="/">Streetfront Digital</Link>
      </div>
      <div className="navbar-links">
        <NavLink212 />
        <NavContactUs />
        <NavTeam />
        {/* Add dropdown for individual project page? */}
      </div>
    </nav>
  );
}

export { NavLink212 };  
export { NavContactUs };
export { NavTeam };
export default Navbar;
