import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <h2 className="tooltip">
        <Tooltip text="Hover over me (h2)" tooltipText="Tooltip for h2" />
      </h2>
      <p className="tooltip">
        <Tooltip text="Hover over me (p)" tooltipText="Tooltip for p" />
      </p>
    </div>
  );
}

export default App;
