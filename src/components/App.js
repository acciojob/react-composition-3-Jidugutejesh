import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css"; 

export default function App() {
  return (
    <div className="app">
      <h2>Tooltip examples</h2>

      <div style={{ margin: "40px 0" }}>
        <Tooltip text="This is a tooltip">
          <button className="example-button">Hover Over me</button>
        </Tooltip>
      </div>

      <div style={{ margin: "40px 0" }}>
        <Tooltip text="Another helpful tip">
          <span className="example-text">Hover over me to see another tooltip</span>
        </Tooltip>
      </div>
    </div>
  );
}
