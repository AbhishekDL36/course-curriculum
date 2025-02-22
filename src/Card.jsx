
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, name }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    <Link to={name}><a  className="cta-button">Learn More</a>   </Link>   
    
    </div>
  );
};

export default Card;
