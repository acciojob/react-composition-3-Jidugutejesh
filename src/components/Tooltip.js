// src/components/Tooltip.js
import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  const child = React.Children.only(children);

  const showTooltip = (evt) => {
    // debug log so we can see events in the browser console
    // Cypress captures browser console in videos/screenshots.
    // This helps confirm the event fired.
    // eslint-disable-next-line no-console
    console.log("Tooltip show triggered for text:", text, "event:", evt && evt.type);
    setVisible(true);
  };

  const hideTooltip = (evt) => {
    // eslint-disable-next-line no-console
    console.log("Tooltip hide triggered for text:", text, "event:", evt && evt.type);
    setVisible(false);
  };

  const existingClass = child.props.className || "";
  const mergedClassName = `${existingClass} tooltip`.trim();

  // Keep existing handlers but call ours too
  const callIfFunc = (fn, e) => {
    if (typeof fn === "function") {
      try { fn(e); } catch (err) { /* ignore user handler errors */ }
    }
  };

  const handleMouseEnter = (e) => { callIfFunc(child.props.onMouseEnter, e); showTooltip(e); };
  const handleMouseLeave = (e) => { callIfFunc(child.props.onMouseLeave, e); hideTooltip(e); };
  const handleMouseOver  = (e) => { callIfFunc(child.props.onMouseOver, e);  showTooltip(e); };
  const handleMouseOut   = (e) => { callIfFunc(child.props.onMouseOut, e);   hideTooltip(e); };

  // tooltip div exists always to match selectors like `h2.tooltip > div`
  // but we add data-visible and inline style so it's shown/hidden reliably.
  const tooltipDiv = (
    <div
      className="tooltiptext"
      role="tooltip"
      data-testid="tooltip-text"
      data-visible={visible ? "true" : "false"}
      style={{ display: visible ? "block" : "none" }}
    >
      {text}
    </div>
  );

  return React.cloneElement(
    child,
    {
      className: mergedClassName,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseOver: handleMouseOver,
      onMouseOut: handleMouseOut,
      "data-has-tooltip": "true",
    },
    // keep child's own children and append tooltipDiv
    <>
      {child.props.children}
      {tooltipDiv}
    </>
  );
}
