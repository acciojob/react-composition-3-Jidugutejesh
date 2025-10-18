import React, { useState } from "react";
import "./Tooltip.css"; 

function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && <div className="tooltiptext">{text}</div>}
    </div>
  );
}

export default Tooltip;
