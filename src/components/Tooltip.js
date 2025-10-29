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

  // CRITICAL FIX: Clones the child element (e.g., <h2>) to inject the 'tooltip' class 
  // and the hover event handlers directly onto it.
  const interactiveChild = React.cloneElement(children, {
    // Merge existing class names with the required 'tooltip' class
    className: (children.props.className || '') + ' tooltip', 
    
    // Inject the event handlers directly onto the child
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    
    // Add a key if one is not present
    key: children.props.key || 'tooltip-child',
  });

  return (
    // We render the cloned child directly. It is now the hoverable container.
    <> 
      {interactiveChild}

      {/* Renders the tooltip content as a <div> (to match the test selector: `... > div`) */}
      {isVisible && (
        <div className="tooltiptext" data-testid="tooltip-text">
          {text}
        </div>
      )}
    </>
  );
}

export default Tooltip;
