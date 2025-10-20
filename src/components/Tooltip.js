import React, { useState } from "react";
// Assuming this component is in Tooltip.js and uses a Tooltip.css
// If you are using styled-components or CSS-in-JS, adjust accordingly.

const Tooltip = ({ text, children }) => {
  // State to manage the visibility of the tooltip text
  const [visible, setVisible] = useState(false);

  return (
    // Applied class 'tooltip' to the container as required.
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}  // Show tooltip on hover
      onMouseLeave={() => setVisible(false)} // Hide tooltip on mouse leave
      // Removed inline styles to rely on CSS file
    >
      {/* Renders the element(s) over which the tooltip appears */}
      {children}

      {/* Conditional Rendering: Only display the tooltip when 'visible' is true */}
      {visible && (
        // Applied class 'tooltiptext' for the tooltip text itself as required.
        <span className="tooltiptext">
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
