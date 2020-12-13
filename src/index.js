import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'

import authReducer from './store/reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

Axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
Axios.defaults.headers.post['Content-Type'] = 'application/json';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
