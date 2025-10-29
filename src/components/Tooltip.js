import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      className="tooltip"               // container with required class name
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {/* children element container (keeps whatever element you pass) */}
      <div className="tooltip-children">
        {children}
      </div>

      {/* tooltip text only rendered when visible */}
      {visible && (
        <div className="tooltiptext" role="tooltip">
          {text}
        </div>
      )}
    </div>
  );
}
