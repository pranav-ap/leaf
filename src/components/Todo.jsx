import React from 'react';

export default class Todo extends React.Component {
  render() {
    const { text, today } = this.props;
    const todoClassName = today ? 'todo todo-completed' : 'todo';

    return (
      <div className={todoClassName} >
        <p className='message'>{text}</p>
      </div>
    );
  }
}
