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

  // The 'tooltip' class is applied to the container (this is the element to hover over)
  return (
    <div
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid="tooltip-container" // Add test ID to the hover area
    >
      {/* Renders the children elements (e.g., <h2>, <button>) */}
      {children}

      {/* Conditional Rendering: Only show the tooltip text if isVisible is true */}
      {isVisible && (
        <span className="tooltiptext" data-testid="tooltip-text">
          {text}
        </span>
      )}
    </div>
  );
}

export default Tooltip;
