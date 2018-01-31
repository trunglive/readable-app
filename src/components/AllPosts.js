import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllPosts } from '../actions/posts';

class AllPosts extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const { posts } = this.props;
    // console.log(posts);
    return (
      <div>
        {posts.map(post => (
          <li key={post.id}>
            {post.title} - {post.author}
              - {post.voteScore} - {post.commentCount}
              - edit post - delete post
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps, { fetchAllPosts })(AllPosts);