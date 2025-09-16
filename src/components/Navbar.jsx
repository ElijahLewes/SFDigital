import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavButton({ to, label }) {
  return (
    <Link to={to} className="nav-btn">
      {label}
    </Link>
  );
}

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/"; // true if we are on the home page

  return (
    <nav className={isHome ? "navbar__home" : "navbar__default"}>
      {/* Logo */}
      <div className="navbar__logo-wrapper">
        <Link id="navbar__logo" to="/">
          SFD
        </Link>
      </div>

      {/* Nav Links */}
      <div className="navbar__links">
        <NavButton to="/link212" label="Link 212" />
        <NavButton to="/contact" label="Contact Us" />
        <NavButton to="/team" label="Meet the Team" />

        {/* Social icons */}
        <div className="navbar__btn-ig">
          <a
          href="https://www.instagram.com/streetfrontdigital/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/ig-icon-light.svg" alt="instagram icon" 
         />
        </a>
        </div>

         <div className="navbar__btn-yt">
          <a
          href="https://www.youtube.com/@StreetfrontDigital"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/yt-icon-light.svg" alt="youtube icon" 
         />
        </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
