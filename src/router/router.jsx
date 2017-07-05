import React from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';

import Container from 'Container';
import Home from 'Home';
import Start from 'Start';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Start} />
      <Route path="home" component={Home} />
    </Route>
  </Router>
);
