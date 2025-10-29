import React from 'react';
import Tooltip from './Tooltip';


function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Tooltip Component Demonstration</h1>
      
      <Tooltip text="Tooltip for heading">
        <h2 data-testid="test-heading" style={{ cursor: 'pointer', borderBottom: '2px dashed blue' }}>
          Hover over this heading
        </h2>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="This is a DIFFERENT tooltip">
        <button data-testid="test-button" style={{ padding: '10px 20px', backgroundColor: '#eef' }}>
          Action Button
        </button>
      </Tooltip>
      
    </div>
  );
}

export default App;
