import React from 'react';
import { connect } from 'react-redux';

import { sortTodos } from 'sortTodos'

import Todo from 'Todo';

export class List extends React.Component {
  render() {
    const renderTodos = () => {
      const { todos } = this.props;

      const sortedTodos = sortTodos(todos);

      if (sortedTodos.length === 0) {
        return (
          <p id='empty'>No tasks left to do.</p>
        );
      }

      return sortedTodos.map((todo) => {
        return (
          <Todo key={todo._id} {...todo} />
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

export default connect((state) => {
  return {
    todos: state.todos
  };
})(List);
