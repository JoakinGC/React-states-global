import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import  "./App.css"
import { Provider } from 'react-redux';
import { store } from './redeux/store.jsx';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
