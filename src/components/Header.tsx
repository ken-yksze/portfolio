import "./Header.css";
import { useState } from "react";

const Header = () => {
  const navLinks = ["Home", "About", "Experience", "Projects", "Contact"];
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <header id="header">
      <a id="header-logo" className="logo" href="#top">
        <h1>YKS</h1>
      </a>
      <nav id="header-nav" aria-label="Header Navigation">
        <ul id="header-nav-links">
          {navLinks.map((navLink, i) => (
            <li key={i}>
              <a
                href={
                  "#" +
                  (navLink.toLowerCase() === "home"
                    ? "top"
                    : navLink.toLowerCase())
                }
              >
                {navLink.charAt(0).toUpperCase() + navLink.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <input
        id="menu-open-button"
        type="image"
        src="menu-02-svgrepo-com.svg"
        alt="Menu Open"
        onClick={toggleMenu}
      />
      <div id="menu" style={{ display: menuOpened ? "block" : "none" }}>
        <div id="menu-content">
          <a className="logo menu-close" href="#top">
            <h1>YKS</h1>
          </a>
          <nav id="menu-nav" aria-label="Menu Navigation">
            <ul id="menu-nav-links">
              {navLinks.map((navLink, i) => (
                <li key={i}>
                  <a
                    className="menu-close"
                    href={
                      "#" +
                      (navLink.toLowerCase() === "home"
                        ? "top"
                        : navLink.toLowerCase())
                    }
                    onClick={toggleMenu}
                  >
                    {navLink.charAt(0).toUpperCase() + navLink.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <input
            id="menu-close-button"
            className="menu-close"
            type="image"
            src="cross-circle-svgrepo-com.svg"
            alt="Menu Close"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
