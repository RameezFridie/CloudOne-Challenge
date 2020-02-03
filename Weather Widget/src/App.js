// Import necessary modules
import React from 'react';
import Weather from './components/Weather'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <h1>5 - Day Weather Forecast</h1>
      {/* Display component */}
      <Weather/>
    </div>
  );
}

export default App;
