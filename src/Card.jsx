import React from 'react';

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="cta-button">Learn More</a>
    </div>
  );
};

export default Card;
