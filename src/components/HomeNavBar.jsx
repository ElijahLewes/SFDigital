import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Individual Nav Buttons
function NavLink212() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/link212')} className="nav-btn">
      Link 212
    </button>
  );
}

function NavContactUs() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/contact')} className="nav-btn">
      Contact Us
    </button>
  );
}

function NavTeam() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/team')} className="nav-btn">
      Meet the Team
    </button>
  );
}

//Home-specific Navbar with Tailwind directly applied
function HomeNavBar() {
  return (
    <nav className="fixed top-0 flex flex-row justify-start items-center z-[1000] bg-transparent w-full p-4 px-8">
      {/* Logo */}
      <div className="mr-8">
        <Link id="navbar-logo" to="/" className="text-xl font-bold">
          SFD
        </Link>
      </div>

      {/* Nav Links */}
      <div className="flex gap-4">
        <NavLink212 />
        <NavContactUs />
        <NavTeam />
      </div>
    </nav>
  );
}

export { NavLink212, NavContactUs, NavTeam };
export default HomeNavBar;
