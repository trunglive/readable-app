import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import { fetchAddComment } from '../actions/commentsActions';

const CreateCommentForm = props => {
  
  return (
    <div>
    Adding Comment
    
    <CommentForm
      parentPostId={props.parentId}
      onSubmit={comment => {
        props.dispatch(fetchAddComment(comment));
      }}
    />
  </div>
  )
  
};

export default connect()(CreateCommentForm);
