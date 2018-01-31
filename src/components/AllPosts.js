import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePostPage from './SinglePostPage';

import { fetchAllPosts } from '../actions/posts';

class AllPosts extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.length > 0 &&
          posts.map(post => <SinglePostPage key={post.id} {...post} />)}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps, { fetchAllPosts })(AllPosts);
