import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDeleteComment } from '../actions/commentsActions';

const SingleCommentPage = ({
  dispatch,
  id,
  parentId,
  body,
  author,
  voteScore
}) => (
  <div>
    <li>
      <p>author - {author}</p>
      <p>body - {body}</p>
      <p>vote - {voteScore}</p>
    </li>
    <Link to={`/editcomment/${id}`}>Edit Comment</Link>
    <button
      onClick={() => {
        dispatch(fetchDeleteComment(id));
      }}
    >
      Delete Comment
    </button>
  </div>
);

export default connect()(SingleCommentPage);
