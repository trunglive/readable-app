const api = process.env.PORT || 'http://localhost:3001';

// Generate a unique token for storing data of Readable on the backend server
let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
  'Content-Type': 'application/json'
};

// Categories
export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(response => response.json())
    .then(data => data.categories);

// Posts
export const getPostsByCategories = (category) =>
  fetch(`${api}/${category}/posts`, { headers }).then(response =>
    response.json()
  );

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers }).then(response => response.json());

export const addPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(post)
  }).then(response => response.json());

export const getPost = postId =>
  fetch(`${api}/posts/${postId}`, { headers }).then(response =>
    response.json()
  );

export const votePost = (postId, option) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option })
  }).then(response => response.json());

export const editPost = (postId, post) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(post)
  }).then(response => response.json());

export const deletePost = postId =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers
  });

// Comments
export const getAllComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers }).then(response =>
    response.json()
  );

export const addComment = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment)
  }).then(response => response.json());

export const getComment = commentId =>
  fetch(`${api}/comments/${commentId}`, { headers }).then(response =>
    response.json()
  );

export const voteComment = (commentId, option) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option })
  }).then(response => response.json());

export const editComment = (commentId, comment) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(comment)
  }).then(response => response.json());

export const deleteComment = commentId =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers
  }).then(response => response.json());
