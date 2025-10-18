import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      tabIndex={0}
      aria-describedby={text ? "tooltip" : undefined}
    >
      {children}
      {visible && (
        <span className="tooltiptext" role="tooltip">
          {text}
        </span>
      )}
    </div>
  );
}
