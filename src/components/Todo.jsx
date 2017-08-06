import React from 'react';
import { connect } from 'react-redux';

import { startUpdateTodo, startDeleteTodo } from 'todosActions';

export class Todo extends React.Component {
  handleDelete(e) {
    e.preventDefault();
    const { _id, dispatch } = this.props;

    dispatch(startDeleteTodo(_id));
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
    isMobile: state.isMobile
  };
})(Todo);
