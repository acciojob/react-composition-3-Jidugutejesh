import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    // The container for the hoverable element.
    // Class 'tooltip' applied as required.
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      // Removed inline styles; relying on Tooltip.css
    >
      {children}
      
      {/* Conditionally render the tooltip text */}
      {visible && (
        // The tooltip text element.
        // Class 'tooltiptext' applied as required.
        <span className="tooltiptext">
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
