// Tooltip.js
import React, { useState } from "react";
import "./Tooltip.css";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  // Clone child element and inject props
  const childWithProps = React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`,
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
  });

  return (
    <>
      {childWithProps}
      {visible && <div className="tooltiptext">{text}</div>}
    </>
  );
}

export default Tooltip;
