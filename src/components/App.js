import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css"; 

export default function App() {
 return (
    <div>
      <h2>
        <Tooltip text="Tooltip for heading">Hover on heading</Tooltip>
      </h2>
      <p>
        <Tooltip text="Tooltip for paragraph">Hover on paragraph</Tooltip>
      </p>
    </div>
  );
}
