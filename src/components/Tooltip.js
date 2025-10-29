import React, { useState } from "react";

/**
 * Tooltip:
 * - Clones the single child element and adds class `tooltip`.
 * - Attaches handlers for both React synthetic and native mouse events:
 *   onMouseEnter, onMouseLeave, onMouseOver, onMouseOut
 * - Renders a <div className="tooltiptext"> inside the child when visible.
 */
export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  const child = React.Children.only(children);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  // preserve existing props
  const existingClass = child.props.className || "";
  const mergedClassName = `${existingClass} tooltip`.trim();

  const existingOnEnter = child.props.onMouseEnter;
  const existingOnLeave = child.props.onMouseLeave;
  const existingOnOver = child.props.onMouseOver;
  const existingOnOut = child.props.onMouseOut;

  // Unified handlers call existing handlers (if any) then our show/hide
  const handleMouseEnter = (e) => {
    if (typeof existingOnEnter === "function") existingOnEnter(e);
    showTooltip();
  };
  const handleMouseLeave = (e) => {
    if (typeof existingOnLeave === "function") existingOnLeave(e);
    hideTooltip();
  };
  const handleMouseOver = (e) => {
    if (typeof existingOnOver === "function") existingOnOver(e);
    showTooltip();
  };
  const handleMouseOut = (e) => {
    if (typeof existingOnOut === "function") existingOnOut(e);
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
      onMouseOver: handleMouseOver,
      onMouseOut: handleMouseOut,
    },
    // keep original children and append tooltip div
    <>
      {child.props.children}
      {tooltipDiv}
    </>
  );
}
