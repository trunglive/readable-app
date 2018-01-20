import * as api from '../utils/api';

export const GET_POSTS_BY_CATEGORIES = 'GET_POSTS_BY_CATEGORIES';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const VOTE_POST = 'VOTE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export const getPostsByCategories = posts => ({
  type: GET_POSTS_BY_CATEGORIES,
  posts
});

export const fetchPostsByCategories = () => dispatch =>
  api
    .getPostsByCategories()
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

export const editPost = updates => ({
  type: EDIT_POST,
  updates
});

export const fetchEditPost = (postId, post) => dispatch =>
  api.editPost(postId, post).then(post => dispatch(editPost(post)));

export const deletePost = postId => ({
  type: DELETE_POST,
  postId
});

export const fetchDeletePost = postId => dispatch =>
  api.deletePost(postId).then(post => dispatch(deletePost(postId)));