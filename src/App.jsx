



import React, { useState, useEffect } from 'react';
import Card from './Card';
import logo from './assets/unnamed.png';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div className="landing-page">
      {/* Navbar */}
      <header className={`header ${darkMode ? "dark" : ""}`}>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <nav className="nav-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/web-designing">Web Designing</a></li>
            <li><a href="/frontend">Frontend</a></li>
            <li><a href="/full-stack">Full Stack</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </nav>

        {/* Dark Mode Toggle Button */}
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Cards Section */}
      <div className="cards-container">
        <Card title="Web Designing" description="Create visually stunning websites." link="/web-designing" />
        <Card title="Frontend Development" description="Build dynamic interfaces." link="/frontend" />
        <Card title="Full Stack Development" description="Master both front-end & back-end." link="/full-stack" />
        <Card title="FAQs" description="Check out our frequently asked questions." link="/faqs" />
      </div>
    </div>
  );
};

export default App;

