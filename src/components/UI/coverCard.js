import React from 'react';

const Card = ({ image, name, cover, profesion, href }) => {
  return (
    <div className='cover-card'>
        <div className='cover-perfil'>
          <img src={image} alt={name} />
          <div>
            <h1 href={href} className="purple" style={{ fontSize: "1.3em", textAlign: "left", zIndex: 3}}>{name}</h1>
            <h1 style={{ fontSize: "0.9em", paddingBottom: "10px", textAlign: "left" }}>{profesion}</h1> 
          </div>        
        </div>
        <div className='cover-text'>
          <h1 style={{ fontSize: "1.2em", padding: "10px", textAlign: "left" }}>{cover}</h1>
        </div>
    </div>
  );
}

export default Card;
