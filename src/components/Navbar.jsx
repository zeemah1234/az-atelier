import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "shop", label: "Shop" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ darkMode, onToggleTheme }) {
  // true when the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="nav-inner" aria-label="Main">
        <a href="#home" className="logo">
          AZ Atelier
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <ul id="nav-links" className={menuOpen ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
          </li>
        </ul>
      </nav>
    </header>
  );
} 