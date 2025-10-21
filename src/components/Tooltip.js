import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  // State to manage whether the tooltip should be visible
  const [visible, setVisible] = useState(false);

  return (
    // The container for the hoverable element.
    // Class 'tooltip' applied as required.
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}  // Show tooltip on hover
      onMouseLeave={() => setVisible(false)} // Hide tooltip on mouse leave
    >
      {/* The child element(s) over which the tooltip appears */}
      {children}
      
      {/* Conditional Rendering: Only render the tooltip text when 'visible' is true */}
      {visible && (
        // The tooltip text element. Class 'tooltiptext' applied as required.
        <span className="tooltiptext">
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
