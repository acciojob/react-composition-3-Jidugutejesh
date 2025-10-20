import React from "react";
import Tooltip from "./Tooltip";
// Assuming you link to a main CSS file for general styles

function App() {
  return (
    <div style={{ margin: "50px" }}>
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2> {/* Tooltip appears over the h2 */}
      </Tooltip>

      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p> {/* Tooltip appears over the p */}
      </Tooltip>
    </div>
  );
}

export default App;
