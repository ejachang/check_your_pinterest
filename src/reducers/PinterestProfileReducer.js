import { PROFILE_INFO } from '../actions/profile_actions';

const _defaultProfileInfo = Object.freeze({
  username: null,
});

const PinterestProfileReducer = (state = _defaultProfileInfo, action) => {
  let newProfileInfo = Object.assign({}, state);
  switch (action.type) {
  case PROFILE_INFO: 
    newProfileInfo.username = action.payload.data.first_name;
    return newProfileInfo;
  default: 
    return state;
  }
};

export default PinterestProfileReducer;