// import React from 'react';

// import Card from './Card';

// const App = () => {
//   return (
//     <div className="landing-page">
  
//       <div className="cards-container">
//         <Card
//           title="Web Designing"
//           description="Create visually stunning websites with modern design techniques."
//           link="/web-designing"
//         />
//         <Card
//           title="Frontend Development"
//           description="Build dynamic and interactive user interfaces with React."
//           link="/frontend"
//         />
//         <Card
//           title="Full Stack Development"
//           description="Become proficient in both front-end and back-end technologies."
//           link="/full-stack"
//         />
//         <Card
//           title="FAQs"
//           description="Have questions? Check out our frequently asked questions."
//           link="/faqs"
//         />
//       </div>
//     </div>
//   );
// };

// export default App;




import React from 'react';
import Card from './Card';
// Ensure your CSS is correctly imported
import logo from '../src/assets/unnamed.png'
const App = () => {
  return (
    <div className="landing-page">
       <img src={logo} alt="Logo" className="logo-img" />
      {/* Header / Navbar */}
      <header className="header">
     
        <nav>
          <div className="logo">
            {/* If you're using an image logo */}
          
            {/* Or if you prefer text-based logo */}
            {/* <h1>Your Website</h1> */}
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/web-designing">Web Designing</a></li>
            <li><a href="/frontend">Frontend</a></li>
            <li><a href="/full-stack">Full Stack</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <div className="cards-container">
        <Card
          title="Web Designing"
          description="Create visually stunning websites with modern design techniques."
          link="/web-designing"
        />
        <Card
          title="Frontend Development"
          description="Build dynamic and interactive user interfaces with React."
          link="/frontend"
        />
        <Card
          title="Full Stack Development"
          description="Become proficient in both front-end and back-end technologies."
          link="/full-stack"
        />
        <Card
          title="FAQs"
          description="Have questions? Check out our frequently asked questions."
          link="/faqs"
        />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
