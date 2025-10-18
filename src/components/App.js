import React from "react";
import Tooltip from './Tooltip';
function App() {
  return (
    <div>
      <h2>
        <Tooltip text="Tooltip for heading">Hover the heading</Tooltip>
      </h2>

      <p>
        <Tooltip text="Tooltip for paragraph">Hover the paragraph</Tooltip>
      </p>
    </div>
  );
}

export default App;
