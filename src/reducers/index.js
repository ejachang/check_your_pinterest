import { combineReducers } from 'redux';
import PinterestSignInReducer from './PinterestSignInReducer';
import PinterestProfileReducer from './PinterestProfileReducer';
import DefaultBoardsReducer from './DefaultBoardsReducer';
const RootReducer = combineReducers({
  user: PinterestSignInReducer,
  username: PinterestProfileReducer,
  defaultboards: DefaultBoardsReducer
});

export default RootReducer;