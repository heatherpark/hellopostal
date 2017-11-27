import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './reducers';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

