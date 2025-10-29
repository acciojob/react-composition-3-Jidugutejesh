import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css"; 

function App() {
  return (
    <div className="app-root">
      <h2>Tooltip Demo</h2>

      <Tooltip text="This is a tooltip">
        <h3 className="example-child">Hover over me</h3>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="Another tooltip message!">
        <p className="example-child">Hover over this text too</p>
      </Tooltip>
    </div>
  );
}

export default App;
