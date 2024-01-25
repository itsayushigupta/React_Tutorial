import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// this searches the id from the html file which has name 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

