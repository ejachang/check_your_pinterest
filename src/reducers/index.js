import { combineReducers } from 'redux';
import PinterestSignInReducer from './PinterestSignInReducer';
import PinterestProfileReducer from './PinterestProfileReducer';
import DefaultBoardReducer from './DefaultBoardReducer';
// debugger;
const RootReducer = combineReducers({
  user: PinterestSignInReducer,
  username: PinterestProfileReducer,
  defaultboard: DefaultBoardReducer
});

export default RootReducer;