import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SinglePostPage from './SinglePostPage';

import { fetchPostsByCategories } from '../actions/posts';

class PostsByCategories extends Component {
  componentDidMount() {
    this.props.fetchPostsByCategories(this.props.match.params.category);
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
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

export default connect(mapStateToProps, { fetchPostsByCategories })(
  PostsByCategories
);
