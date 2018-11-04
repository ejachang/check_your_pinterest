import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { signedIn } from '../actions/signin_actions';
import { profileInfo } from '../actions/profile_actions';
import { boardsData } from '../actions/boards_actions';

import '../style.css';
import Header from './Header';
import Aggregate from './Aggregate';
import SignIn from './SignIn';
import Profile from './Profile';
import Boards from './Boards';
import Pins from './Pins';

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
      .then(data => console.log('datatest', data.data))
      .then(data => this.props.dispatch(boardsData(data.data)))
      .catch(error => console.log(error));
    
    fetch('https://api.pinterest.com/v1/me/?access_token=' + access_token + '&fields=first_name, last_name' )
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
    let { user, firstname } = this.props;
    return (
      <div className="App">
        <Aggregate/>
        <Header />
        { user ? 
          <div>
            <br></br>
            <Profile 
              firstname={firstname} />
            <Pins/>
            {/* <Boards/> */}
          </div>
          : <SignIn /> }
        
      </div>
    );
  }
}
//turning state to props on the react comp
const mapStateToProps = state => {
  return {
    username: state.username.firstname,
    user: state.user.loggedin,
    defaultboards: state.defaultboards
  };
};

const mapDispatchToProps = (dispatch) => {
  return signedIn;
};


export default connect(mapStateToProps)(App);
