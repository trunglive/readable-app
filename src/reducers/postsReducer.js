import {
  GET_POSTS_BY_CATEGORIES,
  GET_ALL_POSTS,
  ADD_POST,
  GET_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST
} from '../actions/postsActions';

const initialPostsState = [];

const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORIES:
      return action.posts;
    case GET_ALL_POSTS:
      return action.posts;
    case ADD_POST:
      return [...state, action.post];
    case GET_POST:
      return [action.post];
    case VOTE_POST:
      return [...state, ...action.post];
    case EDIT_POST:
      return [...state, ...action.post];
    case DELETE_POST:
      return state.filter(post => post.id !== action.postId);
    default:
      return state;
  }
};

export default postsReducer;
