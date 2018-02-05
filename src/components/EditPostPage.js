import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { fetchEditPost } from '../actions/postsActions';
import PropTypes from 'prop-types';

class EditPostPage extends Component {
  render() {
    const post = this.props.posts.filter(
      post => post.id === this.props.match.params.id
    );
    console.log(this.props);
    return (
      <div>
        <PostForm
          postInfo={post[0]}
          onSubmit={content => {
            this.props.fetchEditPost(content.id, content);
            this.props.history.push('/');
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
});

EditPostPage.propTypes = {
  posts: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchEditPost })(EditPostPage);
