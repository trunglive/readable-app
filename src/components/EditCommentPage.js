import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';

import { fetchComment, fetchEditComment } from '../actions/commentsActions';

class EditCommentPage extends Component {
  componentDidMount() {
    this.props.fetchComment(this.props.match.params.id);
  }

  render() {
    const { comment } = this.props;
    return (
      <div>
        Edit Comment Page
        <CommentForm
          commentInfo={comment}
          onSubmit={content => {
            this.props.fetchEditComment(content.parentId, content);
            this.props.history.push('/');
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    comment: state.comments
  };
};

export default connect(mapStateToProps, { fetchComment, fetchEditComment })(
  EditCommentPage
);
