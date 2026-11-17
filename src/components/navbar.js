"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "./theme-provider";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsOpen(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <nav className="container-nav" aria-label="Main navigation">
        <Link className="brand-mark" href="/" onClick={closeMenu}>
          <span className="brand-monogram">R</span>
          <span>Rizwan Shahani</span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <div
          className={`nav-links${isOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={closeMenu}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "light"}
          >
            {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <Link className="nav-contact" href="/contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
