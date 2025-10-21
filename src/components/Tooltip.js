// Tooltip.js - MODIFIED to match Cypress selectors
import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  // We are NOT rendering the outer 'div.tooltip' here anymore.
  // We are just cloning the child and adding event handlers.
  return React.cloneElement(children, {
      // Add event handlers to the child element (h2 or p)
      onMouseEnter: () => setVisible(true),  
      onMouseLeave: () => setVisible(false),
      
    }, 
    // The original children content
    children.props.children,
    
    // The tooltip content, now rendered as a <div> to satisfy the selector '... > div'
    visible && (
      <div className="tooltiptext"> {/* Changed <span> to <div> */}
        {text}
      </div>
    )
  );
};

export default Tooltip;
