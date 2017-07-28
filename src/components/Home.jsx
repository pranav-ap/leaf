import React from 'react';
import { connect } from 'react-redux';

import Search from 'Search';
import Toolbar from 'Toolbar';
import Header from 'Header';
import List from 'List';

import { startAddTodos } from 'actions';

export class Home extends React.Component {
  render() {
    const { dispatch } = this.props;
    dispatch(startAddTodos());

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
