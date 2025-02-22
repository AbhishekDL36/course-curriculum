/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';


const Card = ({ title, description}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
       <a  className="cta-button">Learn More</a>  
    
    </div>
  );
};

export default Card;
