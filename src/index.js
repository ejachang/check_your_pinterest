import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { Provider } from 'react-redux';
import store from './store/index';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
