//import moment from 'moment';
import axios from 'axios';
import { browserHistory } from 'react-router';

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
  return (dispatch) => {
    const todo = {
      text
    };

    return axios.post('/api/todos', { todo }).then(() => {
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
    return axios.get('/api/todos').then((todos) => {
      dispatch(addTodos(todos));
    }).catch(() => {

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

export const startDeleteTodo = (id) => {
  return (dispatch) => {
    return axios.delete(`/api/todos/:${id}`).then((todo) => {
      dispatch(deleteTodo(todo));
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
    return axios.patch(`/api/todos/:${id}`, { todo }).then(() => {
      dispatch(updateTodo(id, todo));
    }).catch(() => {

    });
  };
};

// sign up
const signup = (user) => {
  return {
    type: 'SIGNUP',
    user
  };
};

export const startSignup = (email, password) => {
  return (dispatch) => {
    axios.post('/api/users', { email, password }).then((user) => { // user contains _id and email
      console.log('actions js startSignup - ', user);
      dispatch(signup(user));
      browserHistory.push('/home');
    }).catch(() => {

    });
  };
};

// login
const login = (user) => {
  return {
    type: 'LOGIN',
    user
  };
};

export const startLogin = (email, password) => {
  return (dispatch) => {
    return axios.post('/api/users/login', { email, password }).then((user) => {
      console.log('actions js startLogin - ', user);
      dispatch(login(user));
      browserHistory.push('/home');
    }).catch(() => {

    });
  };
};

// logout
const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const startLogout = () => {
  return (dispatch) => {
    return axios.delete('/api/users/me/token').then(() => {
      dispatch(logout());
    }).catch(() => {

    });
  };
};

export const checkIfLoggedIn = () => {
  return () => {
    return axios.get('/api/users/me').then(() => {
      return true;
    }).then(() => {
      return false;
    });
  };
};
