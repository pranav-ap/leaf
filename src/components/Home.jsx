import React from 'react';
import { connect } from 'react-redux';

import Topbar from 'Topbar';
import List from 'List';
import AddBar from 'AddBar';
import Toolbar from 'Toolbar';
import CreateModal from 'CreateModal';
//import HoverButton from 'HoverButton';

import { startAddTodos } from 'todosActions';

export class Home extends React.Component {
  renderAddBar() {
    const { isMobile } = this.props;

    if (!isMobile) {
      console.log('gggggggggggg');
      return (<AddBar />);
    }
  }

  // renderHoverButton() {
  //   const { isMobile } = this.props;
  // {this.renderHoverButton()}
  //   if (isMobile) {
  //     return (<HoverButton />);
  //   }
  // }

  render() {
    const { dispatch } = this.props;
    dispatch(startAddTodos());

    return (
      <div id='home'>
        <Topbar />
        <CreateModal />
        {this.renderAddBar()}
        <List />
        <Toolbar />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    isMobile: state.isMobile
  };
})(Home);
