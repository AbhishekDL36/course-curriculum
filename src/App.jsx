


// eslint-disable-next-line no-unused-vars
import  React,{ useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import WebDesigning from './Web-designing';
import Navbar from './Navbar';
import Card from './Card';
import Frontend from './Frontend';
import FullStack from './FullStack';
import FAQ from './FAQ';

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
            <Card title="Frontend Development" description="Build dynamic interfaces." name="/frontend"/>
            <Card title="Full Stack Development" description="Master both front-end & back-end." name="/full-stack"/>
            <Card title="FAQs" description="Check out our frequently asked questions." name="/faqs"/>
          </div>
        } />
        <Route path="/web-designing" element={<WebDesigning />} />
        <Route path='/frontend' element={<Frontend/>}/>
        <Route path='/full-stack' element={<FullStack/>}/>
        <Route path='/faqs' element={<FAQ/>}/>
      </Routes>
    </div>
  );
};

export default App;
