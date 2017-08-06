export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'UPDATE_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'DELETE_TODO':
      return state.filter((todo) => {
        if (todo.id === action.id) {
          return false;
        }
        return true;
      });
    case 'ADD_TODOS':
      return action.todos;
    case 'LOGOUT': // clears the todos once we logout
      return [];
    default:
      return state;
  }
};

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return {};
    case 'SIGNUP':
      return action.user;
    default:
      return state;
  }
};
