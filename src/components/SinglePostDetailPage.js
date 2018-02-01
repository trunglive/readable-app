import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePostPage from './SinglePostPage';
import { getPost } from '../actions/posts';

class SinglePostDetailPage extends Component {
  
  render() {
    return (
      <div>
        <SinglePostPage {...this.props.post} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post.id === props.match.params.id)
  };
};

export default connect(mapStateToProps, { getPost })(SinglePostDetailPage);