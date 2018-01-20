import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import categoriesReducer from '../reducers/categories';
import commentsReducer from '../reducers/comments';
import postsReducer from '../reducers/posts';
import sortingReducer from '../reducers/sorting';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      categories: categoriesReducer,
      comments: commentsReducer,
      posts: postsReducer,
      sorting: sortingReducer
    }),
    composeEnhancers(applyMiddleware(logger, thunk))
  );
  return store;
};
