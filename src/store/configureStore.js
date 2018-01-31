import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from '../routers/AppRouter';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import categories from '../reducers/categories';
import comments from '../reducers/comments';
import posts from '../reducers/posts';
import sorting from '../reducers/sorting';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({
      categories,
      comments,
      posts,
      sorting
    }),
    composeEnhancers(applyMiddleware(thunk, logger))
  );
  return store;
};

export default configureStore;
