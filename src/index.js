import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './reducers'
import App from './components/App'

// Reduxのストアを作成する(todoAppはひとつに束ねられたReducer)。
let store = createStore(appReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

