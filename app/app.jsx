/* @flow */

import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
import {render} from 'react-dom';
import Router, {Route, IndexRoute} from 'react-router';

import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';

render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
    </Route>
  </Router>,
  document.getElementById('app'));
