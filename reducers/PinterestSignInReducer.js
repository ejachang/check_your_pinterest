import { SIGNED_IN } from '../actions/signin_actions';

const _defaultProfile = Object.freeze({
  user: null
});

const PinterestSignInReducer = (state = _defaultProfile, action) => {
  let newProfile = Object.assign({}, state);
  switch (action.type) {
  case SIGNED_IN: 
    newProfile.user = action.payload;
    return newProfile;
  }
  return state;
};

export default PinterestSigninReducer;