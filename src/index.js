// Importing Dependencies of react and intalled librairers
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing CSS File for whole project that contains common css 
import './index.css';

// App Component imported to be used as main screen
import App from './App';

// For virtual dom routing using react router dom
import { BrowserRouter} from 'react-router-dom'

// Using for the redux part
import { Provider } from 'react-redux';
import store from './store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

