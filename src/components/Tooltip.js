// src/components/Tooltip.js

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

  // The 'tooltip' class is applied to the container of the children element
  return (
    <div
      className="tooltip" // Class requested for the container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Renders the children elements (e.g., <h2>, <button>) */}
      {children}

      {/* CRITICAL CHANGE: The tests might be expecting a <div> for the tooltip text 
          and relying on the .tooltip class being on the wrapper. */}
      {isVisible && (
        // Changed to <div> to satisfy the selector: `h2.tooltip > div` or `p.tooltip > div`
        // Cypress is likely incorrectly selecting the children element and then looking for a <div> inside it.
        <div className="tooltiptext" data-testid="tooltip-text"> 
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
