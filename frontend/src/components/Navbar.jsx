import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import '../styles/Navbar.css';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <header className="navbar">

      <div className="container navbar-container">

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          Portfolio.
        </a>


        <nav
          className={`navbar-menu ${
            menuOpen ? 'navbar-menu-open' : ''
          }`}
        >

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </nav>


        <button
          className="navbar-toggle"
          onClick={handleMenu}
          aria-label="Toggle navigation"
        >

          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}

        </button>

      </div>

    </header>
  );
}


export default Navbar;