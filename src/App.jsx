


import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import WebDesigning from './Web-designing';
import Navbar from './Navbar';
import Card from './Card';
import Frontend from './Frontend';
import FullStack from './FullStack';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div className="landing-page">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={
          <div className="cards-container">
            <Card title="Web Designing" description="Create visually stunning websites." name="/web-designing" />
            <Card title="Frontend Development" description="Build dynamic interfaces." />
            <Card title="Full Stack Development" description="Master both front-end & back-end." />
            <Card title="FAQs" description="Check out our frequently asked questions." />
          </div>
        } />
        <Route path="/web-designing" element={<WebDesigning />} />
        <Route path='/frontend' element={<Frontend/>}/>
        <Route path='/full-stack' element={<FullStack/>}/>
      </Routes>
    </div>
  );
};

export default App;
