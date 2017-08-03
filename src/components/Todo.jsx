import React from 'react';
import { connect } from 'react-redux';

import { startUpdateTodo } from 'todosActions';

export class Todo extends React.Component {
  render() {
    const { dispatch, _id, text, today } = this.props;
    const todoClassName = today ? 'todo todo-today' : 'todo';

    return (
      <div className={todoClassName} onClick={() => {
          dispatch(startUpdateTodo(_id));
        }}>
        <p className='message'>{text}<span><input type='checkbox' checked={today} /></span></p>
      </div>
    );
  }
}

export default connect()(Todo);
