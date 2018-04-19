import React, { Component } from 'react';
import badge from '../wordmark+badgeCMYK.jpg';

class SignIn extends Component {
  render() {
    return (
      <div className="App-intro">
        <p>Sign in</p>
        <p>username <input type="text" /> </p>
        <p>password <input type="text" /> </p>
        <p>Don't have an account? <button>Create one </button></p>
        or
        <p>Sign in with <img src={badge} className="signin-logo" alt="badge"
          onClick={() => window.location = 'https://localhost:8888/login'}/></p>
      </div>
    );
  }
}

export default SignIn;