import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import logo from '../App-Pinterest-icon.png';
// import App from './App';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <Link to={'/'}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Route path={'/'}/>
          <h1 className="App-title">Check Your Pinterest</h1>
          <h4 className="App-sub">A Pinterest Simulation Prototype</h4>
        </header>
      </div>
    );
  }
}

export default Header;

