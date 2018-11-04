import { PROFILE_INFO } from '../actions/profile_actions';

const _defaultProfileInfo = Object.freeze({
  firstname: null,
});
const PinterestProfileReducer = (state = _defaultProfileInfo, action) => {
  let newProfileInfo = Object.assign({}, state);
  switch (action.type) {
  case PROFILE_INFO: 
    newProfileInfo.firstname = action.payload.first_name;
    return newProfileInfo;
  default: 
    return state;
  }
};

export default PinterestProfileReducer;