import React, { Component } from 'react';

import '../style.css';
import Header from './Header';
//import Upload from './Upload';
import SignIn from './SignIn';

class Profile extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <div>
        <p><input type="text"/></p>
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

class DefaultBoard extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

// class Aggregate extends Component {
//   render() {
//     return (
//       <div>
//       </div>
//     );
//   }
// }


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: false };
  }

  render() {
    let { user } = this.props;
    return (
      <div className="App">
        <Header />
        { user ? <Search />
          : <SignIn /> 
        }
        <DefaultBoard/>
        <Profile />
        <Board />
      </div>
    );
  }
}

export default App;
