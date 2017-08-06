import React from 'react';
import { connect } from 'react-redux';

import { startUpdateTodo, startDeleteTodo } from 'todosActions';

export class Todo extends React.Component {
  handleDelete(e) {
    e.preventDefault();
    const { _id, dispatch } = this.props;

    dispatch(startDeleteTodo(_id));
  }

  handleUpdate(e) {
    e.preventDefault();
    const { _id, text, today, dispatch } = this.props;

    dispatch(startUpdateTodo(_id, text, !today));
  }

  render() {
    const { text, today } = this.props;
    const todoClassName = today ? 'todo todo-today' : 'todo';

    return (
      <div className={todoClassName}>
        <p className='message'>{text}</p>
        <input type="checkbox" className='checkbox' value={today} onChange={this.handleUpdate.bind(this)} />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    isMobile: state.isMobile
  };
})(Todo);
