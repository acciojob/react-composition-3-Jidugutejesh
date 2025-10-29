import React from "react";
import Tooltip from "./Tooltip";
import "./App.css"; 

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "serif" }}>
      <h2>Tooltip Demo</h2>

      <Tooltip text="This is a tooltip">
        <h3 style={{ display: "inline-block", margin: "24px 0" }}>
          Hover over me
        </h3>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="Another tooltip message!">
        <p
          style={{
            display: "inline-block",
            borderBottom: "1px dashed #ccc",
            padding: "8px 0",
          }}
        >
          Hover over this text too
        </p>
      </Tooltip>
    </div>
  );
}

export default App;
