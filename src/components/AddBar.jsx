import React from 'react';
import { connect } from 'react-redux';

import { startAddTodo } from 'todosActions';

export class AddBar extends React.Component {
  handleCreate(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const text = this.refs.addbar.value;

    dispatch(startAddTodo(text));
  }

  render() {
    return (
      <div id='addbar'>
        <input type='text' ref='addbar' placeholder='Add more tasks' />
        <button onClick={this.handleCreate.bind(this)}><i className="fa fa-search" aria-hidden="true" /></button>
      </div>
    );
  }
}

export default connect()(AddBar);
