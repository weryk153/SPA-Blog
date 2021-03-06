'use strict'

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import '../css/normalize.css';
import '../css/style.scss';


ReactDom.render(
  <BrowserRouter basename="/">
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>, document.getElementById('root'),
);