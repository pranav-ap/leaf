export const filterTodos = (todos = [], searchText = '') => {
  let filteredTodos = todos;

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1;
    });

  return filteredTodos;
};
