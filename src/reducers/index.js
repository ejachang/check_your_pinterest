import { combineReducers } from 'redux';
import PinterestSignInReducer from './PinterestSignInReducer';
import PinterestProfileReducer from './PinterestProfileReducer';

const RootReducer = combineReducers({
  PinterestSignInReducer,
  PinterestProfileReducer
});

export default RootReducer;