import React from 'react';

const SinglePostPage = ({
  dispatch,
  id,
  title,
  body,
  author,
  voteScore,
  commentCount
}) => (
  <li>
    <p>title - {title}</p>
    <p>body - {body}</p>
    <p>author - {author}</p>
    <p>vote - {voteScore}</p>
    <p>comment - {commentCount}</p>
  </li>
);

export default SinglePostPage;
