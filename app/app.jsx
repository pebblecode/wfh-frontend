/* @flow */

import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
import {render} from 'react-dom';
import Router, {Route, DefaultRoute} from 'react-router';

import App from './components/App/App';

render(
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>,
  document.getElementById('app'));
