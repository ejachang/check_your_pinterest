import { combineReducers } from 'redux';
import PinterestSignInReducer from './PinterestSignInReducer';
import PinterestProfileReducer from './PinterestProfileReducer';
// debugger;
const RootReducer = combineReducers({
  user: PinterestSignInReducer,
  username: PinterestProfileReducer
});

export default RootReducer;