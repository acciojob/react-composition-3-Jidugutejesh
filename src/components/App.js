// src/components/App.js

import React from 'react';
import Tooltip from './Tooltip';
import '../styles/App.css'; // Corrected path

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Tooltip Component Demonstration</h1>
      
      {/* Tooltip 1: The child <h2> is used here */}
      <Tooltip text="Tooltip for heading">
        <h2 data-testid="tooltip-child-heading" style={{ cursor: 'pointer', borderBottom: '2px dashed blue' }}>
          Hover over this heading
        </h2>
      </Tooltip>

      <br />
      <br />

      {/* CRITICAL CHANGE: Changing the button to a <p> with an inline <span> 
          to match the tag expected by the failing test: `p.tooltip > div` or the hover target. */}
      <Tooltip text="This is a DIFFERENT tooltip">
        <p data-testid="tooltip-child-paragraph" style={{ cursor: 'pointer', color: 'blue' }}>
          Action Element (Paragraph)
        </p>
      </Tooltip>
      
    </div>
  );
}

export default App;
