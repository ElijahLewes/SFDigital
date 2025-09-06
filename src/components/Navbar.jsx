import React from "react";
import { Link } from "react-router-dom";

function NavButton({ to, label }) {
  return (
    <Link to={to} className="nav-btn">
      {label}
    </Link>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 flex flex-row justify-start items-center z-[1000] bg-[var(--Light)] w-full py-5 px-8">
      {/* Logo */}
      <div className="mr-8">
        <Link id="navbar-logo" to="/" className="font-bold text-xl">
          SFD
        </Link>
      </div>

      {/* Nav Links */}
      <div className="flex gap-6 items-start">
        <NavButton to="/link212" label="Link 212" />
        <NavButton to="/contact" label="Contact Us" />
        <NavButton to="/team" label="Meet the Team" />

        {/* Social icons */}
        <div className="sm-navbar-btn">
          <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src="/images/ig-nav-light.svg" alt="instagram icon" 
         className="w-[28px] h-[28px]"/>
        </a>
        </div>
        <div className="sm-navbar-btn">
        <a
          href="https://youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src="/images/yt-nav-light.svg" alt="youtube icon" 
         className="w-[50px] h-[38px]"/>
        </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
