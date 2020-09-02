import React from 'react';
import './App.css';
import DogBar from './container/DogBar';
import DogInfo from './components/DogInfo'

function App() {
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
        <DogBar />
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
        <DogInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
