import React, { Component } from 'react';

import '../style.css';
import Header from './Header';
//import Upload from './Upload';
import Aggregate from './Aggregate';
import SignIn from './SignIn';
import Profile from './Profile';

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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: false };
  }

  render() {
    let { user } = this.state;
    return (
      <div className="App">
        <Aggregate/>
        <Header />
        { user ? 
          <div>
            <Search /> 
            <Profile user={user}/>
          </div>
          : <SignIn /> 
        }
        <DefaultBoard/>
        <Board />
      </div>
    );
  }
}

export default App;
