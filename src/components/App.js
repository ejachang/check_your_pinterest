import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { signedIn } from '../actions/signin_actions';
import { profileInfo } from '../actions/profile_actions';
import { boardsData } from '../actions/boards_actions';

import '../style.css';
import Header from './Header';
import SignIn from './SignIn';
import Profile from './Profile';
import Boards from './Boards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false
    };
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    const { access_token } = parsed;
    if (parsed.access_token !== 'undefined' || parsed.access_token !== undefined) {
      this.props.dispatch(signedIn(parsed.access_token)); 
    }
    
    fetch('https://api.pinterest.com/v1/me/boards/?access_token=' + access_token + '&fields=image, url, name' )
      .then(response => response.json())
      .then(data => {
        console.log('datatest', data.data);
        this.props.dispatch(boardsData(data.data));
      })
      // .then(data => this.props.dispatch(boardsData(data.data)))
      .catch(error => console.log(error));
    
    fetch('https://api.pinterest.com/v1/me/?access_token=' + access_token + '&fields=first_name' )
      .then(response => response.json())
      // .then(data => console.log('name test', data.data.first_name))
      .then(data => {
        console.log('name test', data);
        this.props.dispatch(profileInfo(data.data.first_name));
      })
      .catch(error => console.log(error) );      

  }
  render() {
    console.log('hey', this.props);
    let { user, firstname, defaultboards } = this.props;
    let boardspassed;
    if (defaultboards.data !== null) {
      boardspassed = defaultboards.data;
    } else {
      boardspassed = 'Boards are loading';
    }
    return (
      <div className="App">
        <Header />
        {user ? 
          firstname ?
            <Profile firstname={firstname} /> 
            : <div style={{ 'textAlign': 'center'}}>Page is loading</div>
          : <SignIn />}
        { defaultboards.data !== null ? 
          <div>
            <Boards defaultboards={boardspassed}/> 
          </div>
          : <div style={{ 'textAlign': 'center'}}>{boardspassed}</div> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstname: state.firstname,
    user: state.user.loggedin,
    defaultboards: state.defaultboards
  };
};

const mapDispatchToProps = (dispatch) => {
  return signedIn;
};


export default connect(mapStateToProps)(App);
