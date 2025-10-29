import React, { useState } from 'react';
import "../styles/Tooltip.css";
function Tooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid="tooltip-container" 
    >
      {children}

     
      {isVisible && (
        <span className="tooltiptext" data-testid="tooltip-text">
          {text}
        </span>
      )}
    </div>
  );
}

export default Tooltip;
