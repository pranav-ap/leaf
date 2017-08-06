import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { todosReducer, authReducer } from 'reducers';
import { isMobileReducer } from 'uiReducers';

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    todos: todosReducer,
    auth: authReducer,
    isMobile: isMobileReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
