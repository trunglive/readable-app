import React from 'react';
import { connect } from 'react-redux';
import CreateCommentPage from './CreateCommentPage';

import { fetchEditComment } from '../actions/comments';

const EditCommentPage = props => {
 
  return (
    <div>
      Edit Comment Page
      <CreateCommentPage
        commentInfo={props.comment}
        onSubmit={comment => {
          props.dispatch(fetchEditComment(props.comment.id, comment));
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    comment: state.comments.find(comment => comment.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditCommentPage);
