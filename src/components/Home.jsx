import React from 'react';
import { connect } from 'react-redux';

import Search from 'Search';
import Toolbar from 'Toolbar';
import Header from 'Header';
import List from 'List';

export class Home extends React.Component {
  render() {
    return (
      <div id='home'>
        <Header />
        <Search />
        <List />
        <Toolbar />
      </div>
    );
  }
}

export default connect()(Home);
