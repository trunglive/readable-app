import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePostPage from './SinglePostPage';
import { fetchAllComments } from '../actions/comments';

import SingleCommentPage from './SingleCommentPage';

class SinglePostDetailPage extends Component {
  componentDidMount() {
    this.props.fetchAllComments(this.props.match.params.id);
  }

  render() {
    const { comments } = this.props;

    return (
      <div>
        <SinglePostPage {...this.props.post} />

        {comments.length > 0 &&
          comments.map(comment => (
            <SingleCommentPage key={comment.id} {...comment} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post.id === props.match.params.id),
    comments: state.comments
  };
};

export default connect(mapStateToProps, { fetchAllComments })(
  SinglePostDetailPage
);
