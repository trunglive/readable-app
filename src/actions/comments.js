import * as api from '../utils/api';

export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const getAllComments = comments => ({
  type: GET_ALL_COMMENTS,
  comments
});

export const fetchAllComments = postId => dispatch =>
  api
    .getAllComments(postId)
    .then(comments => dispatch(getAllComments(comments)));

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const fetchAddComment = comment => dispatch =>
  api.addComment(comment).then(comment => dispatch(addComment(comment)));

export const getComment = comment => ({
  type: GET_COMMENT,
  comment
});

export const fetchComment = commentId => dispatch =>
  api.getComment(commentId).then(comment => dispatch(getComment(comment)));

export const voteComment = comment => ({
  type: VOTE_COMMENT,
  comment
});

export const fetchVoteComment = (commentId, option) => dispatch =>
  api
    .voteComment(commentId, option)
    .then(comment => dispatch(voteComment(comment)));

export const editComment = updates => ({
  type: EDIT_COMMENT,
  updates
});

export const fetchEditComment = (commentId, comment) => dispatch =>
  api
    .editComment(commentId, comment)
    .then(comment => dispatch(editComment(comment)));

export const deleteComment = commentId => ({
  type: DELETE_COMMENT,
  commentId
});

export const fetchDeleteComment = commentId => dispatch =>
  api
    .deleteComment(commentId)
    .then(comment => dispatch(deleteComment(commentId)));