// eslint-disable-next-line no-unused-vars
import React from 'react';
import './webdesigning.css'

const WebDesigning = () => {
  return (
    <div className="web-designing-container">
      <div className="content-box">
        <h1 className="main-heading">Web Designing</h1>
        <p className="description">
          Web designing is the process of creating websites using <span className="highlight-html">HTML</span> & <span className="highlight-css">CSS</span>. It involves layout, color schemes, typography, and responsive design to enhance user experience.
        </p>
        
        <div className="section">
          <h2 className="sub-heading">What is HTML?</h2>
          <p className="text">HTML (HyperText Markup Language) is used to structure and layout web pages.</p>
          <pre className="code-block">
            <code>{`<h1>Hello World</h1>`}</code>
          </pre>
        
          <h2 className="sub-heading">What is CSS?</h2>
          <p className="text">CSS (Cascading Style Sheets) is used to style web pages.</p>
          <pre className="code-block">
            <code>{`h1 { color: blue; font-size: 24px; text-align: center; }`}</code>
          </pre>
        </div>
        
        <p className="final-text">
          Mastering HTML & CSS is the first step to becoming a great web designer! 🎨
        </p>
        <button className="learn-btn">Start Learning</button>
      </div>
    </div>
  );
};

export default WebDesigning;