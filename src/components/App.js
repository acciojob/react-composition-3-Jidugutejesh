import React from 'react';
import Tooltip from './Tooltip';
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Tooltip Component Demonstration</h1>
      
      {/* Tooltip 1: The child <h2> has a unique test ID */}
      <Tooltip text="Tooltip for heading">
        <h2 data-testid="tooltip-child-heading" style={{ cursor: 'pointer', borderBottom: '2px dashed blue' }}>
          Hover over this heading
        </h2>
      </Tooltip>

      <br />
      <br />

      {/* Tooltip 2: The child <button> has a unique test ID */}
      <Tooltip text="This is a DIFFERENT tooltip">
        <button data-testid="tooltip-child-button" style={{ padding: '10px 20px', backgroundColor: '#eef' }}>
          Action Button
        </button>
      </Tooltip>
      
    </div>
  );
}

export default App;
