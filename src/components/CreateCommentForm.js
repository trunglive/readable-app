import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import { fetchAddComment } from '../actions/commentsActions';
import PropTypes from 'prop-types';

const CreateCommentForm = props => {
  return (
    <div>
      <CommentForm
        parentPostId={props.parentId}
        onSubmit={comment => {
          props.dispatch(fetchAddComment(comment));
        }}
      />
    </div>
  );
};

CreateCommentForm.propTypes = {
  parentId: PropTypes.string.isRequired
}

export default connect()(CreateCommentForm);
