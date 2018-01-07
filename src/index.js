import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import appReducer from './reducers';
import App from './components/App';

// Reduxのストアを作成する(todoAppはひとつに束ねられたReducer)。
const store = createStore(appReducer);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);

