import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import Container from 'Container';
import Home from 'Home';
import Start from 'Start';

import { checkIfLoggedIn } from 'authActions';

const requireLogin = (nextState, replace, next) => {
  if (!checkIfLoggedIn()) {
    console.log('requireLogin - not logged in');
    //replace('/');
  }
  next();
};

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (checkIfLoggedIn()) {
    console.log('redirectIfLoggedIn - already logged in');
    //replace('/home');
  }
  next();
};

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Container}>
      <IndexRoute component={Start} onEnter={requireLogin} />
      <Route path='home' component={Home} onEnter={redirectIfLoggedIn} />
    </Route>
  </Router>
);
