import {
  GET_POSTS_BY_CATEGORIES,
  GET_ALL_POSTS,
  ADD_POST,
  GET_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST
} from '../actions/posts';

const initialPostsState = [];

const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORIES:
      return [...state, ...action.posts];
    case GET_ALL_POSTS:
      return [...state, ...action.posts];
    case ADD_POST:
      return [...state, ...action.post];
    case GET_POST:
      return [...state, ...action.post];
    case VOTE_POST:
      return [...state, ...action.post];
    case EDIT_POST:
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.updates
          };
        } else {
          return state;
        }
      });
    case DELETE_POST:
      return state.filter(post => post.id !== action.postId);
    default:
      return state;
  }
};

export default postsReducer;