import React from 'react';
import '../styles/StarfieldBackground.css';

const StarfieldBackground = ({ children }) => {
  return (
    <div className="starfield-wrapper">
      {children}
    </div>
  );
};

export default StarfieldBackground;
