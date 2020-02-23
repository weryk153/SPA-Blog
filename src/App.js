/* eslint-disable react/prefer-stateless-function */
'use strict'

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Post } from './pages';
import { Navbar } from './components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <Navbar />
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Post} />
      </div>
    );
  }
}

export default App;