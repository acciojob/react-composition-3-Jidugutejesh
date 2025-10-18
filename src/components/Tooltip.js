import React, { useState, cloneElement } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  // Clone the child to attach tooltip class and events
  const childWithProps = cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false)
  });

  return (
    <div className={visible ? "tooltip show" : "tooltip"}>
      {childWithProps.props.children}  {/* keep original children */}
      <div className="tooltiptext">{text}</div>
    </div>
  );
};

export default Tooltip;
