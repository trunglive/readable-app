import * as api from '../utils/api';
import {
  GET_ALL_COMMENTS,
  ADD_COMMENT,
  GET_COMMENT,
  VOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

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

export const editComment = comment => ({
  type: EDIT_COMMENT,
  comment
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
  api.deleteComment(commentId).then(() => dispatch(deleteComment(commentId)));
