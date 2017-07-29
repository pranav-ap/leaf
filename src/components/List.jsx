import React from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';

export class List extends React.Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    document.getElementById('dummy').scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { todos } = this.props;
    let number = 0;

    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p id='empty'>There is nothing to show.</p>
        );
      }

      return todos.map((todo) => {
        return (
          <Todo key={number++} {...todo} />
        );
      });
    };

    return (
      <div id='list'>
        {renderTodos()}
        <div id='dummy'></div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    todos: state.todos
  };
})(List);
