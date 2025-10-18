import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="Tooltip for H2">
        <h2>Hover over me (H2)</h2>
      </Tooltip>

      <Tooltip text="Tooltip for P">
        <p>Hover over me too (P)</p>
      </Tooltip>
    </div>
  );
}

export default App;
