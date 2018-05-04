import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { signedIn } from '../actions/signin_actions';
import { profileInfo } from '../actions/profile_actions';
import { boardsData } from '../actions/boards_actions';


import { fakeSuggestedBoard, fakeProfileData, substituteboards } from '../fakeData';
import '../style.css';
import Header from './Header';
//import Upload from './Upload';
import Aggregate from './Aggregate';
import SignIn from './SignIn';
import Profile from './Profile';
import Boards from './Boards';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    // debugger;
    if (parsed.access_token !== 'undefined' || parsed.access_token !== undefined) {
      this.props.dispatch(signedIn());
      // console.log('user should be true', this.props);
    }
    this.props.dispatch(profileInfo(fakeProfileData));
    // this.props.dispatch(boardsData(substituteboards));
  }
  render() {
    // debugger;
    let { user, username} = this.props;
    // let { username } = this.props;
    // console.log(this.props);
    // debugger;
    return (
      <div className="App">
        <Aggregate/>
        <Header />
        { user ? 
          <div>
            <br></br>
            <Profile 
              firstname={username} />
          </div>
          : <SignIn /> 
        }
        <Route path='/boards' component = {Boards} />
        <Route exact path='/' render={() => 
          <Redirect to='/boards'/>}
        />
        
        
      </div>
    );
  }
}
//turning state to props on the react comp
const mapStateToProps = (state) => {
  // debugger;
  // console.log(state);
  return {
    username: state.username.firstname,
    user: state.user.loggedin,
    // defaultboards: state.defaultboards
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return signedIn;
// };

// App.propTypes = {
  // username: PropTypes.string,
  // user: PropTypes.boolean,
  // defaultboard: PropTypes.object.isRequired
// };

export default connect(mapStateToProps)(App);
