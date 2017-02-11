//import moment from 'moment';
import axios from 'axios';

export const addFeature = (feature) => {
  return {
    type: 'NEW_FEATURE',
    feature
  };
};

// Search text
export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// add new todo
const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    const todo = {
      text
    };

    return axios.post('/todos', { todo }).then(() => {
      dispatch(addTodo({
        ...todo
      }));
    }).catch((e) => {

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
  return (dispatch, getState) => {
    return axios.get('/todos').then((todos) => {
      dispatch(addTodos(todos));
    }).catch((e) => {

    });
  };
};

// delete a todo with id
const deleteTodo = (todo) => {
  return {
    type: 'DELETE_TODO',
    todo
  };
};

export const StartDeleteTodo = (id) => {
  return (dispatch, getState) => {
    return axios.delete(`/todos/:${id}`).then((todo) => {
      dispatch(deleteTodo(todo));
    }).catch((e) => {

    });
  };
};

// update a todo with id
const updateTodo = (todo) => {
  return {
    type: 'UPDATE_TODO',
    todo
  };
};

export const startUpdateTodo = () => {
  return (dispatch, getState) => {
    return axios.patch('/todos/:id').then((todo) => {
      dispatch(updateTodo(todo));
    }).catch((e) => {

    });
  };
};

// sign up
const signup = (user) => {
  return {
    type: 'SIGN_UP',
    user
  };
};

export const startSignup = (email, password) => {
  return (dispatch, getState) => {
    console.log('1');
    axios.post('/users', { email, password }).then((user) => {
      dispatch(signup(user));
    }).catch((e) => {
      console.log('error', e);
    });
  };
};

// login
const login = (user) => {
  return {
    type: 'LOG_IN',
    user
  };
};

export const startLogin = (email, password) => {
  return (dispatch, getState) => {
    return axios.post('/users/login', { email, password }).then((user) => {
      dispatch(login(user));
    }).catch((e) => {

    });
  };
};

// logout
const logout = (user) => {
  return {
    type: 'LOG_OUT',
    user
  };
};

export const startLogout = () => {
  return (dispatch, getState) => {
    return axios.delete('/users/me/token').then(() => {
      dispatch(logout());
    }).catch(() => {

    });
  };
};
