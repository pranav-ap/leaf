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

    const token = localStorage.getItem('x-auth');
    // const headers = {
    //   'x-auth': token
    // };

    return axios.post('/api/todos', { todo }, { 'x-auth': token }).then(() => {
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
    const token = localStorage.getItem('x-auth');

    return axios.get('/api/todos', { 'x-auth': token }).then((todos) => {
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
    const token = localStorage.getItem('x-auth');

    return axios.delete(`/api/todos/:${id}`, { 'x-auth': token }).then((todo) => {
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
    const token = localStorage.getItem('x-auth');

    return axios.patch(`/api/todos/:${id}`, { todo }, { 'x-auth': token }).then(() => {
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
    // axios.post(path, data, header)
    // user contains _id and email
    axios.post('/api/users', { email, password }).then((user) => {
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('x-auth', user.headers['x-auth'])
      } else {
        console.log('Sorry! No Web Storage support..');
      }

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
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('x-auth', user.headers['x-auth'])
      } else {
        console.log('Sorry! No Web Storage support..');
      }

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
    const token = localStorage.getItem('x-auth');

    return axios.delete('/api/users/me/token', { 'x-auth': token }).then(() => {
      dispatch(logout());
      localStorage.removeItem('x-auth');
    }).catch(() => {

    });
  };
};

export const checkIfLoggedIn = () => {
  return () => {
    const token = localStorage.getItem('x-auth');

    return axios.get('/api/users/me', { 'x-auth': token }).then(() => {
      return true;
    }).then(() => {
      return false;
    });
  };
};
