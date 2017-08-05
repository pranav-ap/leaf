import React from 'react';
import { connect } from 'react-redux';

import { startUpdateTodo, startDeleteTodo } from 'todosActions';

export class Todo extends React.Component {
  handleDelete(e) {
    e.preventDefault();
    const { _id, dispatch } = this.props;

    dispatch(startDeleteTodo(_id));
  }

  checkModeAndRender() {
    const { today, mode } = this.props;

    if (mode === 'delete') {
      return (
        <button onClick={this.handleDelete.bind(this)}><i className="fa fa-plus" aria-hidden="true" /></button>
      );
    }

    return (
      <input type='checkbox' checked={today} />
    );
  }

  render() {
    const { dispatch, _id, text, today } = this.props;
    const todoClassName = today ? 'todo todo-today' : 'todo';

    return (
      <div className={todoClassName} onClick={() => {
          dispatch(startUpdateTodo(_id));
        }}>
        <p className='message'>{text}</p>
        {this.checkModeAndRender()}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    mode: state.mode
  };
})(Todo);
