import React from 'react';
import { connect } from 'react-redux';

import { startAddTodo } from 'actions';

export class Toolbar extends React.Component {
  onNew(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(startAddTodo('eat more food'));
  }

  render() {
    return (
      <div id='toolbar'>
        <button onClick={this.onNew.bind(this)}>New</button>
      </div>
    );
  }
}

export default connect()(Toolbar);
