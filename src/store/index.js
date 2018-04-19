// applyMiddleware, 
import { createStore } from 'redux';

import RootReducer from '../reducers/index';

let store = createStore(
  RootReducer
);

export default store;