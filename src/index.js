import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk, 
      //spamFilter
    ),
    window.REDUX_DEVTOOLS_EXTENSION
      ? window.REDUX_DEVTOOLS_EXTENSION()
      : (f) => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
