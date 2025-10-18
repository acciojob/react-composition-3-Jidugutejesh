import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>

      <hr />

      <Tooltip text="Another tooltip text">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
