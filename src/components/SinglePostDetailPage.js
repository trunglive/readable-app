import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePostContent from './SinglePostContent';
import { fetchAllComments } from '../actions/commentsActions';
import { fetchPost } from '../actions/postsActions';

import SingleCommentPage from './SingleCommentPage';

class SinglePostDetailPage extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
    this.props.fetchAllComments(this.props.match.params.id);
  }

  render() {
    const { post, comments } = this.props;

    return (
      <div>
        {post.length > 0 && <SinglePostContent {...post[0]} />}
        
        {comments.length > 0 &&
          comments.map(comment => (
            <SingleCommentPage key={comment.id} {...comment} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts,
    comments: state.comments
  };
};

export default connect(mapStateToProps, { fetchPost, fetchAllComments })(
  SinglePostDetailPage
);
