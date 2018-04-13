import React, { Component } from 'react';

import '../style.css';
import Header from './Header';

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

// class Upload extends Component {
//   render() {
//     return (
//       <div>
//       </div>
//     );
//   }
// }

// class Aggregate extends Component {
//   render() {
//     return (
//       <div>
//       </div>
//     );
//   }
// }

class SignIn extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          Please sign in
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SignIn />
        <Profile />
        <Board />
      </div>
    );
  }
}

export default App;
