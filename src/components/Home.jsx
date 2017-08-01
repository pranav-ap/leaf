import React from 'react';
import { connect } from 'react-redux';

import Toolbar from 'Toolbar';
import Topbar from 'Topbar';
import List from 'List';
//import CreateModal from 'CreateModal';

import { startAddTodos } from 'todosActions';

export class Home extends React.Component {
  render() {
    const { dispatch } = this.props;
    dispatch(startAddTodos());

    return (
      <div id='home'>
        <Topbar />
        <List />
        <Toolbar />
      </div>
    );
  }
}

export default connect()(Home);
