import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>

      <Tooltip text="Hover over me to see another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
