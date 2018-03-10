import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import { fetchAddComment } from '../actions/commentsActions';
import { fetchPost } from '../actions/postsActions';
import PropTypes from 'prop-types';

const CreateCommentForm = props => {
  return (
    <CommentForm
      parentPostId={props.parentId}
      onSubmit={comment => {
        props.dispatch(fetchAddComment(comment));
        props.dispatch(fetchPost(props.parentId));
      }}
    />
  );
};

CreateCommentForm.propTypes = {
  parentId: PropTypes.string.isRequired
};

export default connect()(CreateCommentForm);