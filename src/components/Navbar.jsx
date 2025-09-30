import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../css/theme/_themes.scss';


export default function Navbar() {
  const { pathname } = useLocation();

  // Start in the correct variant on first render (no flash)
  const initialVariant =
    pathname === "/" || pathname === "/home" ? "home" : "default";
  const [navbarState, setNavbarState] = useState(initialVariant);

  useEffect(() => {
    setNavbarState(pathname === "/" || pathname === "/home" ? "home" : "default");
  }, [pathname]);

  // set theme controls
  const [theme, setTheme] = useState("light");
     
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const variant = navbarState === "home" ? "navbar__home" : "navbar__default";

  return (

    <nav className={`navbar__wrapper ${variant}`}>
      <div className="navbar__logo-wrapper">
        <Link id="navbar__logo" to="/">SFD</Link>
      </div>

      <div className="navbçar__links">
        <NavButton to="/link212" label="Link 212" />
        <NavButton to="/contact" label="Contact" />
        <NavButton to="/team" label="About" />
      </div>

      {/* Social icons */}
      <div className="navbar__btn-ig">
        <a href="https://www.instagram.com/streetfrontdigital/" target="_blank" rel="noopener noreferrer">
          <img src="/images/ig-icon-light.svg" alt="instagram icon" />
        </a>
      </div>
      <div className="navbar__btn-yt">
        <a href="https://www.youtube.com/@StreetfrontDigital" target="_blank" rel="noopener noreferrer">
          <img src="/images/yt-icon-light.svg" alt="youtube icon" />
        </a>
      </div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </nav>
  );
}

function NavButton({ to, label }) {
  return (
    <Link to={to} className="nav-btn">
      {label}
    </Link>
  );
}
