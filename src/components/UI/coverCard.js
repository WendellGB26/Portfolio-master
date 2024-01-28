import React, { useState, useEffect } from 'react';

const Card = ({ image, name, cover, profesion, href }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Check if the user is on mobile
      setIsMobile(isMobile => /Mobi/i.test(navigator.userAgent));
    };

    checkMobile();

    // Check if the user is on mobile on window resize
    window.addEventListener('resize', checkMobile);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className='cover-card'>
        <div className='cover-perfil'>
          <img src={image} alt={name} />
          <div className='cover-tag'>
            <h1 href={href} className="purple" style={{ fontSize: "1.3em", textAlign: "left", zIndex: 3}}>{name}</h1>
            {!isMobile && 
              <h1 if style={{ fontSize: "0.9em", paddingBottom: "10px", textAlign: "left" }}>{profesion}</h1> 
            }
          </div>        
        </div>
        <div className='cover-text'>
          <h1>{cover}</h1>
        </div>
    </div>
  );
}

export default Card;
