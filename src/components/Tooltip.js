import React, { useState } from "react";
const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{ position: "relative", cursor: "pointer" }}
    >
      {children}
      {visible && (
        <div
          className="tooltiptext"
          style={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "red",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            zIndex: 10,
          }}
        >
          {text}
        </div>
      )}
    </span>
  );
};

export default Tooltip;
