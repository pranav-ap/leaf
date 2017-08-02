import axios from 'axios';

// add new todo
const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export const startAddTodo = (text) => {
  return (dispatch) => {
    const todo = {
      text,
      today: false
    };

    const headers = {
      'x-auth': localStorage.getItem('x-auth')
    };

    return axios.post('/api/todos', todo, { headers }).then(() => {
      dispatch(addTodo(todo));
    }).catch(() => {

    });
  };
};

// get all todos on start
const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export const startAddTodos = () => {
  return (dispatch) => {
    const headers = {
      'x-auth': localStorage.getItem('x-auth')
    };

    return axios.get('/api/todos', { headers }).then((res) => {
      dispatch(addTodos(res.data.todos));
    }).catch(() => {

    });
  };
};

// delete a todo with id
const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export const startDeleteTodo = (id) => {
  return (dispatch) => {
    const headers = {
      'x-auth': localStorage.getItem('x-auth')
    };

    return axios.delete(`/api/todos/:${id}`, { headers }).then(() => {
      dispatch(deleteTodo(id));
    }).catch(() => {

    });
  };
};

// update a todo with id
const updateTodo = (id, todo) => {
  return {
    type: 'UPDATE_TODO',
    id,
    todo
  };
};

export const startUpdateTodo = (id, todo) => {
  return (dispatch) => {
    const headers = {
      'x-auth': localStorage.getItem('x-auth')
    };

    return axios.patch(`/api/todos/:${id}`, todo, { headers }).then(() => {
      dispatch(updateTodo(id, todo));
    }).catch(() => {

    });
  };
};
