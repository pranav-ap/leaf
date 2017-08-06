import React from 'react';
import { connect } from 'react-redux';

import Topbar from 'Topbar';
import List from 'List';
import AddBar from 'AddBar';
import CreateModal from 'CreateModal';
import HoverButton from 'HoverButton';

import { startAddTodos } from 'todosActions';

export class Home extends React.Component {
  renderAddBarOrHoverButton() {
    const { isMobile } = this.props;

    if (isMobile) {
      return (<HoverButton />);
    }

    return (<AddBar />);
  }

  render() {
    const { dispatch } = this.props;
    dispatch(startAddTodos());

    return (
      <div id='home'>
        <Topbar />
        <CreateModal />
        {this.renderAddBarOrHoverButton()}
        <List />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    isMobile: state.isMobile
  };
})(Home);
