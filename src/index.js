import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';
import App from './components/App';


/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

// Reduxのストアを作成する(todoAppはひとつに束ねられたReducer)。
const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);


