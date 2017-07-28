import React from 'react';
import { connect } from 'react-redux';

import { filterTodos } from 'filters';

import Todo from 'Todo';

export class List extends React.Component {
  render() {
    const { searchText, todos } = this.props;

    const renderTodos = () => {
      const filteredTodos = filterTodos(todos, searchText);

      if (filteredTodos.length === 0) {
        return (
          <p id='empty'>There is nothing to show.</p>
        );
      }

      return filteredTodos.map((todo) => {
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
    todos: state.todos,
    searchText: state.searchText
  };
})(List);
