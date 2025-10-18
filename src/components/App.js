import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h2>Hover over me (H2)</h2>
      </Tooltip>

      <Tooltip text="This is a tooltip">
        <p>Hover over me (P)</p>
      </Tooltip>
    </div>
  );
}

export default App;
