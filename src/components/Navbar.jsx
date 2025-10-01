import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../css/theme/_themes.scss';

export default function Navbar() {
  const { pathname } = useLocation();

  // Start in the correct variant on first render (no flash)
  const initialVariant = pathname === "/" || pathname === "/home" ? "home" : "default";
  const [navbarState, setNavbarState] = useState(initialVariant);

  useEffect(() => {
    setNavbarState(pathname === "/" || pathname === "/home" ? "home" : "default");
  }, [pathname]);

  // set theme controls
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Observe Home's data-nav attribute to know if hero is in view
  const [navPhase, setNavPhase] = useState("at-hero"); // "at-hero" | "after-hero"
  useEffect(() => {
    const el = document.documentElement;
    const update = () => setNavPhase(el.getAttribute("data-nav") || "at-hero");
    update();
    const mo = new MutationObserver(update);
    mo.observe(el, { attributes: true, attributeFilter: ["data-nav"] });
    return () => mo.disconnect();
  }, []);

  const variant = navbarState === "home" ? "navbar__home" : "navbar__default";

  const onHome = navbarState === "home";
  const atHero = navPhase === "at-hero";
  // Icon source logic:
  // - On home + at hero: keep light icons for contrast over hero
  // - Else: use dark icons for light theme, light icons for dark theme
  const igIconSrc =
    onHome && atHero
      ? "/images/ig-icon-light.svg"
      : theme === "light"
      ? "/images/ig-icon-dark.svg"
      : "/images/ig-icon-light.svg";

  const ytIconSrc =
    onHome && atHero
      ? "/images/yt-icon-light.svg"
      : theme === "light"
      ? "/images/yt-icon-dark.svg"
      : "/images/yt-icon-light.svg";

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

      {/* Social icons with dynamic src */}
      <div className="navbar__btn-ig">
        <a
          href="https://www.instagram.com/streetfrontdigital/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={igIconSrc} alt="instagram icon" />
        </a>
      </div>
      <div className="navbar__btn-yt">
        <a
          href="https://www.youtube.com/@StreetfrontDigital"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ytIconSrc} alt="youtube icon" />
        </a>
      </div>

      <button className="nav-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
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
