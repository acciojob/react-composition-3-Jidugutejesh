import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  const child = React.Children.only(children);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const existingClass = child.props.className || "";
  const mergedClassName = `${existingClass} tooltip`.trim();

  const existingOnEnter = child.props.onMouseEnter;
  const existingOnLeave = child.props.onMouseLeave;

  const handleMouseEnter = (e) => {
    if (typeof existingOnEnter === "function") existingOnEnter(e);
    showTooltip();
  };

  const handleMouseLeave = (e) => {
    if (typeof existingOnLeave === "function") existingOnLeave(e);
    hideTooltip();
  };

  const tooltipDiv = visible ? (
    <div className="tooltiptext" role="tooltip">
      {text}
    </div>
  ) : null;

  return React.cloneElement(
    child,
    {
      className: mergedClassName,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    <>
      {child.props.children}
      {tooltipDiv}
    </>
  );
}
