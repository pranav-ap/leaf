export const sortTodos = (todos) => {
  const sortedTodos = todos;

  // Sort todos with non-completed first
  sortedTodos.sort((a, b) => {
    if (!a.today && b.today) {
      return -1;
    } else if (a.today && !b.today) {
      return 1;
    }
    return 0;
  });

  return sortedTodos;
};
