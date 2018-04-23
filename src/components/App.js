import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { signedIn } from '../actions/signin_actions';
import { profileInfo } from '../actions/profile_actions';
import { boardsData } from '../actions/boards_actions';
// import PropTypes from 'prop-types';

import '../style.css';
import Header from './Header';
//import Upload from './Upload';
import Aggregate from './Aggregate';
import SignIn from './SignIn';
import Profile from './Profile';
import Search from './Search';
import Boards from './Boards';
// import Board from './Board';
// eslint-disable-next-line
let fakeProfileData = { data: { first_name: 'User'} };
let fakeSuggestedBoard = {
  0: {
    id: '307441180751852605',
    name: '50s',
    url: 'https://www.pinterest.com/bumper0cars/50s/'
  },
};

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
    this.props.dispatch(profileInfo(fakeProfileData));
    // eslint-disable-next-line
    // fetch('https://api.pinterest.com/v1/me/' + '?access_token=' + parsed.access_token, {
    //   // headers: { 'Authorization': 'Bearer' + parsed.access_token}
    // }).then(response => response.json())
    //   .then(data => this.props.dispatch( profileInfo(data) ))
    //   .catch(error => this.props.dispatch( profileInfo(fakeProfileData) ));
    fetch('https://api.pinterest.com/v1/me/boards/?access_token=' + parsed.access_token + '&fields=image, url, name', 
      { headers: { 'Authorization': 'Bearer' + parsed.access_token}
      }).then(response => response.json())
      .then(data => this.props.dispatch(boardsData(data)))
      // .then(data => this.props.dispatch( defaultBoardData(data) ))
      .catch(error => console.log(error) );

  }
  render() {
    let { user, username } = this.props;
    // let { username } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <Aggregate/>
        <Header />
        { user ? 
          <div>
            <br></br>
            <Profile 
              firstname={username} />
            <Search /> 
          </div>
          : <SignIn /> 
        }
        <Boards/>
        {/* <Board /> */}
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
    defaultboards: state.defaultboards
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
