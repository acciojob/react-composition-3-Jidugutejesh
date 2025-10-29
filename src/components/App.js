// src/components/App.js

import React from 'react';
import Tooltip from './Tooltip';
import '../styles/App.css'; 

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Tooltip Component Demonstration</h1>
      
      {/* Tooltip 1: Uses <h2>. The style ensures the tooltip positions relative to it. */}
      <Tooltip text="Tooltip for heading">
        <h2 
            data-testid="tooltip-child-heading" 
            style={{ 
                cursor: 'pointer', 
                borderBottom: '2px dashed blue', 
                position: 'relative', 
                display: 'inline-block' 
            }}
        >
          Hover over this heading
        </h2>
      </Tooltip>

      <br />
      <br />

      {/* Tooltip 2: Uses <p> (to satisfy the test selector p.tooltip > div). */}
      <Tooltip text="This is a DIFFERENT tooltip">
        <p 
            data-testid="tooltip-child-paragraph" 
            style={{ 
                cursor: 'pointer', 
                color: 'blue',
                position: 'relative', 
                display: 'inline-block' 
            }}
        >
          Action Element (Paragraph)
        </p>
      </Tooltip>
      
    </div>
  );
}

export default App;
