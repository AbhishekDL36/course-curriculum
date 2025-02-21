

    import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/unnamed.png';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✖' : '☰'}
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/web-designing" onClick={() => setMenuOpen(false)}>Web Designing</Link></li>
          <li><Link to="/frontend" onClick={() => setMenuOpen(false)}>Frontend</Link></li>
          <li><Link to="/full-stack" onClick={() => setMenuOpen(false)}>Full Stack</Link></li>
          <li><Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link></li>
        </ul>
      </nav>

      {/* Dark Mode Toggle Button */}
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Navbar;
