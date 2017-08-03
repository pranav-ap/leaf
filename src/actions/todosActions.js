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

    return axios.post('/api/todos', todo, { headers }).then((res) => {
      dispatch(addTodo(res.data));
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
const deleteTodo = (_id) => {
  return {
    type: 'DELETE_TODO',
    _id
  };
};

export const startDeleteTodo = (_id) => {
  return (dispatch) => {
    const headers = {
      'x-auth': localStorage.getItem('x-auth')
    };

    return axios.delete(`/api/todos/:${_id}`, { headers }).then(() => {
      dispatch(deleteTodo(_id));
    }).catch(() => {

    });
  };
};

// update a todo with id
const updateTodo = (_id) => {
  return {
    type: 'UPDATE_TODO',
    _id
  };
};

export const startUpdateTodo = (_id) => {
  return (dispatch) => {
    const headers = {
      'x-auth': localStorage.getItem('x-auth')
    };

    return axios.patch(`/api/todos/:${_id}`, { }, { headers }).then(() => {
      dispatch(updateTodo(_id));
    }).catch(() => {
      console.log('error in startUpdateTodo');
    });
  };
};
