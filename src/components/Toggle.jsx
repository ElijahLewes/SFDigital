import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Toggle({ theme, setTheme, onHome, atHero }) {
  const { pathname } = useLocation();

  const variant = pathname === "/link212" ? "link212" : "default";
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setIsDark(newTheme === "dark");
  };

  // Determine which visual state to show (for color contrast)
  // home + at hero → light-on-dark look (like your navbar icons)
  const visualMode =
    onHome && atHero
      ? "hero"
      : theme === "light"
      ? "light"
      : "dark";

  const toggleClass = [
    "toggle",
    variant === "link212" ? "l212" : "",
    visualMode,
    onHome && atHero ? "hero" : "",
    ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={toggleClass} onClick={handleToggle}>
      <span className="toggle-circle" />
    </button>
  );
}
