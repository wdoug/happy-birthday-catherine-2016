import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import $ from 'jquery';
import 'jquery.ripples';

$('body').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
