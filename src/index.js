import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './styles/index.scss';
import App from './App';
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {
  BrowserRouter as Router, 
} from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

