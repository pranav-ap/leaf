import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import Main from 'Main';
import Groundhog from 'Groundhog';
import Start from 'Start';

const requireLogin = () => {

};

const redirectIfLoggedIn = () => {

};

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Start} onEnter={redirectIfLoggedIn} />
      <Route path="home" component={Groundhog} onEnter={requireLogin} />
    </Route>
  </Router>
);
