import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import posts from './postsReducer';
import comments from './commentsReducer';
import sorting from './sortingReducer';

const rootReducer = combineReducers({
  categories,
  posts,
  comments,
  sorting
});

export default rootReducer;