import {
  GET_ALL_COMMENTS,
  ADD_COMMENT,
  GET_COMMENT,
  VOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actions/comments';

const initialCommentsState = [];

const commentsReducer = (state = initialCommentsState, action) => {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return [...state, ...action.comments];
    case ADD_COMMENT:
      return [...state, ...action.comment];
    case GET_COMMENT:
      return [...state, ...action.comment];
    case VOTE_COMMENT:
      return [...state, ...action.comment];
    case EDIT_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          return {
            ...post,
            ...action.updates
          };
        } else {
          return state;
        }
      });
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.commentId);
    default:
      return state;
  }
};

export default commentsReducer;