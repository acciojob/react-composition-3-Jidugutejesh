import React, { useState, cloneElement } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const childWithTooltip = cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false)
  });

  return (
    <div className={`tooltip-wrapper ${visible ? "show" : ""}`}>
      {childWithTooltip}
      <div className="tooltiptext">{text}</div>
    </div>
  );
};

export default Tooltip;
