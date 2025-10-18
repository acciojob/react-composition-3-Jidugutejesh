// Tooltip.js
import React, { useState } from "react";
import "./Tooltip.css";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`,
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    children: (
      <>
        {children.props.children}
        {visible && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
}

export default Tooltip;
