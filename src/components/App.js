import React, { Component } from 'react';
import logo from '../App-Pinterest-icon.png';
import '../style.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
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

class Profile extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class Board extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile />
        <Board />
      </div>
    );
  }
}

export default App;
