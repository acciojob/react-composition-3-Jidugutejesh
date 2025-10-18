// src/components/Tooltip.js
import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  // If children is not a valid React element (e.g. plain string),
  // wrap it in a <span> so we can add props.
  const child = React.isValidElement(children)
    ? children
    : <span>{children}</span>;

  // Merge className while preserving existing classes
  const existingClass = child.props.className || "";
  const mergedClass = `${existingClass} tooltip`.trim();

  // Create the props we want to add on the child element
  const extraProps = {
    className: mergedClass,
    onMouseEnter: (e) => {
      if (typeof child.props.onMouseEnter === "function") child.props.onMouseEnter(e);
      show();
    },
    onMouseLeave: (e) => {
      if (typeof child.props.onMouseLeave === "function") child.props.onMouseLeave(e);
      hide();
    },
    onFocus: (e) => {
      if (typeof child.props.onFocus === "function") child.props.onFocus(e);
      show();
    },
    onBlur: (e) => {
      if (typeof child.props.onBlur === "function") child.props.onBlur(e);
      hide();
    },
    tabIndex: child.props.tabIndex ?? 0, // make focusable if not already
    // note: do not override other important props
  };

  // Clone the child and append the tooltip <div> as a child node
  const cloned = React.cloneElement(
    child,
    extraProps,
    // Keep original child content (child.props.children) and add the tooltip div after it
    <>
      {child.props.children}
      {visible && <div className="tooltiptext">{text}</div>}
    </>
  );

  return cloned;
}
