import React from 'react'
import './App.css';
import Navi from './components/TopBar'

function App() {
  return (
    <div className="App">
      <Navi />
      <main>
        <div id="heroContainer">
          <h1>Order groceries for delivery or pickup today</h1>
          <p>What you want from local stores, brought right to your door.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
