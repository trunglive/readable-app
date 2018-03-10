import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import NotFoundPage from './NotFoundPage';
import { fetchEditPost } from '../actions/postsActions';
import PropTypes from 'prop-types';

class EditPostPage extends Component {
  render() {
    const post = this.props.posts.filter(
      post => post.id === this.props.match.params.id
    );
    const matchedPost = { ...post[0] };

    return (
      <div>
        {Object.keys(matchedPost).length > 0 ? (
          <PostForm
            postInfo={matchedPost}
            onSubmit={content => {
              this.props.fetchEditPost(content.id, content);
              this.props.history.push('/');
            }}
          />
        ) : (
          <NotFoundPage />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
});

EditPostPage.propTypes = {
  posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { fetchEditPost })(EditPostPage);
