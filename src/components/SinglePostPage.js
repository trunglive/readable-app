import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDeletePost } from '../actions/posts';

const SinglePostPage = ({
  dispatch,
  id,
  title,
  body,
  author,
  category,
  voteScore,
  commentCount
}) => (
  <div>
    <li>
      <Link to={`/${category}/${id}`}>title - {title}</Link>
      <p>body - {body}</p>
      <p>author - {author}</p>
      <p>vote - {voteScore}</p>
      <p>comment - {commentCount}</p>
    </li>
    <Link to={`/editpost/${id}`}>Edit Post</Link>
    <button
      onClick={() => {
        dispatch(fetchDeletePost(id));
      }}
    >
      Delete Post
    </button>
  </div>
);

export default connect()(SinglePostPage);
