import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js';

const root = document.getElementById('location-service');
ReactDOM.hydrate(<App />, root);
