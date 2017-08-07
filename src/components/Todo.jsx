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

  renderTrash() {
    const { today } = this.props;

    if (today) {
      return (
        <button className='trashButton' onClick={this.handleDelete.bind(this)}><i className="fa fa-trash" aria-hidden="true" /></button>
      );
    }
  }

  render() {
    const { text, today } = this.props;
    const todoClassName = today ? 'todo todo-today' : 'todo';

    return (
      <div className={todoClassName}>
        <input type="checkbox" className='checkbox' value={today} checked={today} onChange={this.handleUpdate.bind(this)} />
        <p className='message'>{text}</p>
        {this.renderTrash()}
      </div>
    );
  }
}

export default connect()(Todo);
