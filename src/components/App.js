import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ margin: "50px" }}>
      {/* First Tooltip: text="This is a tooltip" */}
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>
      
      {/* Added a divider for better visual separation */}
      <hr style={{ border: '1px dotted #ccc', margin: '20px 0' }} />

      {/* Second Tooltip: text="Hover over me to see another tooltip" */}
      <Tooltip text="Hover over me to see another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
