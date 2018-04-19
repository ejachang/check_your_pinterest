import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import '../style.css';
import Header from './Header';
//import Upload from './Upload';
import Aggregate from './Aggregate';
import SignIn from './SignIn';
import Profile from './Profile';
import Search from './Search';

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
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    if (parsed.access_token !== undefined) {
      
    }
  }
  render() {
    let { user } = this.props;
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

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.PinterestSigninReducer.user
  };
};

export default connect(mapStateToProps)(App);
