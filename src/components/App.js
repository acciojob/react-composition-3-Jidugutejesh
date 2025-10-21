// App.js - MODIFIED to apply the .tooltip class to the children
import React from "react";
import Tooltip from "./Tooltip";
import './Tooltip.css'; // Ensure CSS is imported

function App() {
  return (
    <div style={{ margin: "50px" }}>
      {/* The Tooltip component will clone this <h2>, 
        add onMouseEnter/onMouseLeave, and inject the tooltip <div>. 
        Resulting HTML structure is h2.tooltip > ... + div.tooltiptext. 
        This satisfies the selectors: h2.tooltip and h2.tooltip > div 
      */}
      <Tooltip text="This is a tooltip">
        <h2 className="tooltip">Hover over me</h2> {/* Added className="tooltip" */}
      </Tooltip>
      
      <hr style={{ border: '1px dotted #ccc', margin: '20px 0' }} />

      {/* Second Tooltip */}
      <Tooltip text="Hover over me to see another tooltip">
        <p className="tooltip">Hover over me to see another tooltip</p> {/* Added className="tooltip" */}
      </Tooltip>
    </div>
  );
}

export default App;
