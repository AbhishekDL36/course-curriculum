

import React, { useState } from 'react';
import Card from './Card';
import logo from './assets/unnamed.png';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="landing-page">



      
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

      
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

    
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/web-designing">Web Designing</a></li>
            <li><a href="/frontend">Frontend</a></li>
            <li><a href="/full-stack">Full Stack</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </nav>
      </header>


      <div className="cards-container">
        <Card title="Web Designing" description="Create visually stunning websites with modern design techniques." link="/web-designing" />
        <Card title="Frontend Development" description="Build dynamic and interactive user interfaces with React." link="/frontend" />
        <Card title="Full Stack Development" description="Become proficient in both front-end and back-end technologies." link="/full-stack" />
        <Card title="FAQs" description="Have questions? Check out our frequently asked questions." link="/faqs" />
      </div>
    </div>
  );
};

export default App;
