import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Toggle from "./Toggle";
import '../css/theme/_themes.scss';

export default function Navbar() {
  const { pathname } = useLocation();

  // Start in the correct variant on first render (no flash)
  const initialVariant =
  pathname === "/" || pathname === "/home"
    ? "home"
    : pathname === "/link212"
    ? "link212"
    : pathname === "/team"
    ? "about"
    : "default";

const [navbarState, setNavbarState] = useState(initialVariant);

    useEffect(() => {
    if (pathname === "/" || pathname === "/home") {
      setNavbarState("home");
    } else if (pathname === "/link212") {
      setNavbarState("link212");
    } else if (pathname === "/team") {
      setNavbarState("about");
    } else {
      setNavbarState("default");
    }
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

  const variant =
  navbarState === "home"
    ? "navbar__home"
    : navbarState === "link212"
    ? "navbar__link212"
    : navbarState === "about"
    ? "navbar__about"
    : "navbar__default";


  const onHome = navbarState === "home";
  const atHero = navPhase === "at-hero";
  // Icon source logic:
  // - On home + at hero: keep light icons for contrast over hero
  // - Else: use dark icons for light theme, light icons for dark theme
  const igIconSrc =
    onHome && atHero
      ? "/images/ig-light.svg"
      : theme === "light"
      ? "/images/ig-dark.svg"
      : "/images/ig-light.svg";

  const ytIconSrc =
    onHome && atHero
      ? "/images/yt-light.svg"
      : theme === "light"
      ? "/images/yt-dark.svg"
      : "/images/yt-light.svg";

useEffect(() => {
    if (navbarState === "link212") {
      document.documentElement.style.setProperty(
        "--l212-bg-img",
        theme === "light"
          ? 'url("../images/l212/light-grain-bg.png")'
          : 'url("../images/l212/dark-grain-bg.png")'
      );
    } else if (navbarState === "about") {
        document.documentElement.style.setProperty(
          "--section-bg",
          theme === "light"
          ? 'url("../images/fawn-grain-bg.png")'
          : 'url("../images/charcoal-grain-bg.png")'
        );
  } else {
      // Optional: remove when leaving link212
      document.documentElement.style.removeProperty("--l212-bg-img");
    }
  }, [theme, navbarState]);


return (
    <nav className={`navbar__wrapper ${variant}`}>
      <div className="navbar__right-wrapper">
        <div className="navbar__logo-wrapper">
          <Link id="navbar__logo" to="/">SFD</Link>
        </div>


        <div className="navbar__links">
          <NavButton to="/link212" label="Link 212"/>
          <NavButton to="/team" label="About" />
        </div>
      </div>

    <div className="navbar__left-wrapper">
          {/* Social icons with dynamic src */}
        <div className="navbar__btn-wrapper">
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
        </div>

          <Toggle
            theme={theme}
            setTheme={setTheme}
            onHome={onHome}
            atHero={atHero}
          />
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
