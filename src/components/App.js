import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { signedIn } from '../actions/signin_actions';
import { profileInfo } from '../actions/profile_actions';
import { defaultBoardData } from '../actions/default_board_actions';

import '../style.css';
import Header from './Header';
//import Upload from './Upload';
import Aggregate from './Aggregate';
import SignIn from './SignIn';
import Profile from './Profile';
import Search from './Search';
import Board from './Board';
import DefaultBoard from './DefaultBoard';
// eslint-disable-next-line
let fakeProfileData = { data: { first_name: 'User'} };
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    if (parsed.access_token !== undefined) {
      // debugger;
      this.props.dispatch(signedIn());
      // console.log('user should be true', this.props);
    }
    this.props.dispatch( profileInfo(fakeProfileData) );
    // eslint-disable-next-line
    // fetch('https://api.pinterest.com/v1/me/' + '?access_token=' + parsed.access_token, {
    //   // headers: { 'Authorization': 'Bearer' + parsed.access_token}
    // }).then(response => response.json())
    //   .then(data => this.props.dispatch( profileInfo(data) ))
    //   .catch(error => this.props.dispatch( profileInfo(fakeProfileData) ));
    fetch('https://api.pinterest.com/v1/me/boards/suggested/?access_token=' + parsed.access_token, {
      headers: { 'Authorization': 'Bearer' + parsed.access_token}
    }).then(response => response.json())
      .then(data => this.props.dispatch( defaultBoardData(data) ))
      .catch(error => console.log(error) );


  }
  render() {
    let { user } = this.props;
    let { username } = this.props;
    return (
      <div className="App">
        <Aggregate/>
        <Header />
        { user ? 
          <div>
            <br></br>
            <Profile 
              name={username} />
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
//turning state to props on the react comp
const mapStateToProps = (state) => {
  // debugger;
  return {
    username: state.username,
    user: state.user,
    defaultboard: state.defaultboard
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return signedIn;
// };

export default connect(mapStateToProps)(App);
