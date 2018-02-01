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
    console.log(posts);

    return (
      <div>
        <p>All Posts:</p>
        <ul>
          {posts.length > 0 &&
            posts.map(post => <SinglePostPage key={post.id} {...post} />)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps, { fetchAllPosts })(AllPosts);
