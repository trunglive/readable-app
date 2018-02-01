import React from 'react';
import { connect } from 'react-redux';
import CreatePostPage from './CreatePostPage';
import { fetchEditPost } from '../actions/posts';

const EditPostPage = props => {

  return (
    <div>
      Edit Post Page
      <CreatePostPage
        postInfo={props.post}
        onSubmit={post => {
          props.dispatch(fetchEditPost(props.post.id, post));
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditPostPage);
