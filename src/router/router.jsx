import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import Container from 'Container';
import Home from 'Home';
import Start from 'Start';

import { checkIfLoggedIn } from 'actions';

const requireLogin = (nextState, replace, next) => {
  if (!checkIfLoggedIn()) {
    console.log('router.jsx - replace /');
    replace('/');
  }
  next();
};

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Start} />
      <Route path="home" component={Home} onEnter={requireLogin} />
    </Route>
  </Router>
);
