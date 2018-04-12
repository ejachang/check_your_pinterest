import React, { Component } from 'react';
import logo from './public/App-Pinterest-icon.png';
import './public/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A Pinterest Simulation Prototype</h1>
        </header>
        <p className="App-intro">
          Please sign in
        </p>
      </div>
    );
  }
}

export default App;
