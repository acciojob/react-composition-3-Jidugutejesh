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
    <>
      {childWithTooltip}
      {visible && <div className="tooltiptext">{text}</div>}
    </>
  );
};

export default Tooltip;
