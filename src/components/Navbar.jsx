import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavButton({ to, label }) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(to)} className="nav-btn">
      {label}
    </button>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 flex flex-row justify-start items-center z-[1000] bg-[var(--Light)] w-full py-5 px-8">
      {/* Logo */}
      <div className="mr-8">
        <Link id="navbar-logo" to="/" className="font-bold">
          SFD
        </Link>
      </div>

      {/* Nav Links */}
      <div className="flex gap-4">
        <NavButton to="/link212" label="Link 212" />
        <NavButton to="/contact" label="Contact Us" />
        <NavButton to="/team" label="Meet the Team" />
      </div>
    </nav>
  );
}

export default Navbar;
