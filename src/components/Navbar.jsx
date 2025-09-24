import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  // Extend mapping for additional custom navbar designs. Likely for link212 page.
  const [navbarState, setNavbarState] = useState("default"); // "home" | "contact" | "team" | "link212" | "default"

  useEffect(() => {
    if (pathname === "/home" || pathname === "/") setNavbarState("home");
    // else if (pathname === "/contact") setNavbarState("contact");
    // else if (pathname === "/team") setNavbarState("team");
    // else if (pathname === "/link212") setNavbarState("link212");
    else setNavbarState("default");
  }, [pathname]);

  // map state -> global class name. Uncomment/add as needed.
  const variant =
    navbarState === "home" ? "navbar__home" :
    // navbarState === "contact" ? "navbar__contact" :
    // navbarState === "team" ? "navbar__team" :
    // navbarState === "link212" ? "navbar__link212" :
    "navbar__default";

  return (
    <nav className={`navbar__wrapper ${variant}`}>
      <div className="navbar__logo-wrapper">
        <Link id="navbar__logo" to="/">SFD</Link>
      </div>

      <div className="navbar__links">
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
