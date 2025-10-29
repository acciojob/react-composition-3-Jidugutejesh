// src/components/App.js
import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css"; // keep correct path to your CSS

function App() {
  return (
    <div className="app-root">
      <h1>Tooltip Test Page</h1>

      {/* EXACT element and text the tests expect */}
      <Tooltip text="Tooltip for heading">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <br />
      <br />

      {/* EXACT element and text the tests expect */}
      <Tooltip text="Tooltip for paragraph">
        <p>Hover over this paragraph</p>
      </Tooltip>
    </div>
  );
}

export default App;
