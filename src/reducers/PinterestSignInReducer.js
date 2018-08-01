import { SIGNED_IN } from '../actions/signin_actions';

const _defaultProfile = Object.freeze({
  loggedin: null
});
// debugger;
const PinterestSignInReducer = (state = _defaultProfile, action) => {
  let newProfile = Object.assign({}, state);
  switch (action.type) {
  case SIGNED_IN: 
    newProfile.loggedin = true;
    return newProfile;
  default:
    return state;
  }
};

export default PinterestSignInReducer;