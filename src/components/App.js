import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <h2 className="tooltip">
        <Tooltip text="Hover over me"/>
      </h2>
      <p className="tooltip">
        <Tooltip text="Hover over me to see another tooltip" />
      </p>
    </div>
  );
}

export default App;
