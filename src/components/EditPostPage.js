import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';

import { fetchPost, fetchEditPost } from '../actions/postsActions';

class EditPostPage extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        Edit Post Page
        <PostForm
          postInfo={post}
          onSubmit={content => {
            this.props.fetchEditPost(content.id, content);
            this.props.history.push('/');
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts
  };
};

export default connect(mapStateToProps, { fetchPost, fetchEditPost })(EditPostPage);
