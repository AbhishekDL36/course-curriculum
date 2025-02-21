import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, name }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
       <a  className="cta-button">Learn More</a>  
    
    </div>
  );
};

export default Card;
