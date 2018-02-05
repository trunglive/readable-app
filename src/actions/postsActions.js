import * as api from '../utils/api';
import {
  GET_POSTS_BY_CATEGORIES,
  GET_ALL_POSTS,
  ADD_POST,
  GET_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST
} from './actionTypes';

export const getPostsByCategories = posts => ({
  type: GET_POSTS_BY_CATEGORIES,
  posts
});

export const fetchPostsByCategories = category => dispatch =>
  api
    .getPostsByCategories(category)
    .then(posts => dispatch(getPostsByCategories(posts)));

export const getAllPosts = posts => ({
  type: GET_ALL_POSTS,
  posts
});

export const fetchAllPosts = () => dispatch =>
  api.getAllPosts().then(posts => dispatch(getAllPosts(posts)));

export const addPost = post => ({
  type: ADD_POST,
  post
});

export const fetchAddPost = post => dispatch =>
  api.addPost(post).then(post => dispatch(addPost(post)));

export const getPost = post => ({
  type: GET_POST,
  post
});

export const fetchPost = postId => dispatch =>
  api.getPost(postId).then(post => dispatch(getPost(post)));

export const votePost = post => ({
  type: VOTE_POST,
  post
});

export const fetchVotePost = (postId, option) => dispatch =>
  api.votePost(postId, option).then(post => dispatch(votePost(post)));

export const editPost = post => ({
  type: EDIT_POST,
  post
});

export const fetchEditPost = (postId, post) => dispatch =>
  api.editPost(postId, post).then(post => dispatch(editPost(post)));

export const deletePost = postId => ({
  type: DELETE_POST,
  postId
});

export const fetchDeletePost = postId => dispatch =>
  api.deletePost(postId).then(() => dispatch(deletePost(postId)));
