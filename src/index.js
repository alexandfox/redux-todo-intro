import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from "./App"
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux"
import { createStore } from 'redux'
import todoApp from './redux/reducers'


import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './redux/actions'

const store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();

// // Log the initial state
// console.log(store.getState())

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// // Dispatch some actions
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// // Stop listening to state updates
// unsubscribe()


