import { PROFILE_INFO } from '../actions/profile_actions';

const _defaultProfileInfo = Object.freeze({
  firstName: null,
  lastName: null,
});

const PinterestProfileReducer = (state = _defaultProfileInfo, action) => {
  let newProfileInfo = Object.assign({}, state);
  switch (action.type) {
  case PROFILE_INFO: 
    newProfileInfo.firstName = action.payload.data.first_name;
    newProfileInfo.lastName = action.payload.data.last_name;
    return newProfileInfo;
  default: 
    return state;
  }
};

export default PinterestProfileReducer;