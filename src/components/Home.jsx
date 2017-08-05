import React from 'react';
import { connect } from 'react-redux';

import Topbar from 'Topbar';
import Main from 'Main';
import MobileMain from 'MobileMain';

import { startAddTodos } from 'todosActions';

export class Home extends React.Component {
  renderMain() {
    const { isMobile } = this.props;

    if (isMobile) {
      return (<MobileMain />);
    }

    return (<Main />);
  }

  render() {
    const { dispatch } = this.props;
    dispatch(startAddTodos());

    return (
      <div id='home'>
        <Topbar />
        {this.renderMain()}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    isMobile: state.isMobile
  };
})(Home);
