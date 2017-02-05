import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import Main from 'Main';
import Groundhog from 'Groundhog';
import Search from 'Search';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Groundhog} />
    </Route>
  </Router>
);
