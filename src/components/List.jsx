import React from 'react';
import { connect } from 'react-redux';

import { sortTodos } from 'sortTodos'

import Todo from 'Todo';

export class List extends React.Component {
  render() {
    const { todos } = this.props;

    const sortedTodos = sortTodos(todos);

    const renderTodos = () => {
      if (sortedTodos.length === 0) {
        return (
          <p id='empty'>There is nothing to show.</p>
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
      </div>
    );
  }
}

export default connect(state => {
  return {
    todos: state.todos
  };
})(List);
