import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { signedIn } from '../actions/signin_actions';
import { profileInfo } from '../actions/profile_actions';

import '../style.css';
import Header from './Header';
//import Upload from './Upload';
import Aggregate from './Aggregate';
import SignIn from './SignIn';
import Profile from './Profile';
import Search from './Search';
import Board from './Board';
import DefaultBoard from './DefaultBoard';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    if (parsed.access_token !== undefined) {
      this.props.dispatch( signedIn() );
    }

    let fakeProfileData = { 
      // eslint-disable-next-line
      data: { first_name: 'User', last_name: 'User'}
    };
    // eslint-disable-next-line
    fetch('https://api.pinterest.com/v1/me/' + '?access_token=' + parsed.access_token, {
      headers: { 'Authorization': 'Bearer' + parsed.access_token}
    }).then(response => response.json())
      .then(data => this.props.dispatch( profileInfo(data) ))
      .catch(error => this.props.dispatch( profileInfo(fakeProfileData) ));
  }
  render() {
    let { user } = this.props.PinterestSignInReducer;
    let {firstName, lastName } = this.props.PinterestProfileReducer;
    // console.log(user);
    return (
      <div className="App">
        <Aggregate/>
        <Header />
        { user ? 
          <div>
            <br></br>
            <Profile 
              firstName={firstName}
              lastName={lastName} />
            <Search /> 
          </div>
          : <SignIn /> 
        }
        <DefaultBoard/>
        <Board />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
  // return {
  // state
  // firstName: state.PinterestProfileReducer.firstName,
  // lastName: state.PinterestProfileReducer.lastName
  // };
  // user: state.PinterestSigninReducer.user;
};

export default connect(mapStateToProps)(App);
