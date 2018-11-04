import { SIGNED_IN } from '../actions/signin_actions';

const _defaultProfile = Object.freeze({
  loggedin: false
});
// debugger;
const PinterestSignInReducer = (state = _defaultProfile, action) => {
  let newProfile = Object.assign({}, state);
  switch (action.type) {
  case SIGNED_IN: 
    newProfile.loggedin = action.payload;
    return newProfile;
  default:
    return state;
  }
};

export default PinterestSignInReducer;