import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css"; 

function App() {
  return (
    <div className="app-root">
      <h1>Tooltip Test Page</h1>

      <Tooltip text="Tooltip for heading">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="Tooltip for paragraph">
        <p>Hover over this paragraph</p>
      </Tooltip>
    </div>
  );
}

export default App;
