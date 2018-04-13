import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          <p>Please sign in</p>
          <p>username <input type="text" /> </p>
          <p>password <input type="text" /> </p>
          <p>Don't have an account? <button>Create one </button></p>
        </p>
      </div>
    );
  }
}

export default SignIn;