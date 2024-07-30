import React from 'react';
const Card = ({ image, title, date, status }) => {
  return (

    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <div className="card-footer">
          <span>{date}</span>
          <span className="card-status">{status}</span>
        </div>
      </div>
    </div>
  );
};



export default Card;



