import React from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';

import Main from 'Main';
import Groundhog from 'Groundhog';
import Start from 'Start';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Start} />
      <Route path="home" component={Groundhog} />
    </Route>
  </Router>
);
