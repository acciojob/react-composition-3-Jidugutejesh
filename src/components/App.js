import React from "react";
import Tooltip from "./Tooltip";
// Assuming you link to your CSS files here or in index.js

function App() {
  return (
    <div style={{ margin: "50px" }}>
      <Tooltip text="This is a tooltip">
        {/* The component will automatically apply the 'tooltip' class to the div */}
        <h2>Hover over me</h2>
      </Tooltip>
      
      {/* Added a break for separation, matching the visual of the original image */}
      <hr style={{ border: '1px dotted #ccc', margin: '20px 0' }} />

      <Tooltip text="Hover over me to see another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
