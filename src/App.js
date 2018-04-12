import React, { Component } from 'react';
import logo from './App-Pinterest-icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a Pinterest Simulation</h1>
        </header>
        <p className="App-intro">
          Please sign in
        </p>
      </div>
    );
  }
}

export default App;
