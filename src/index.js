import React from 'react';
import ReactDOM from 'react-dom'; // render React components
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // everything gets rendered onto root
);

