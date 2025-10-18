import React, { useState } from "react";

const Tooltip = ({ text, tooltipText }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {text}
      {show && <div>{tooltipText}</div>}
    </div>
  );
};

export default Tooltip;
