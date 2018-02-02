import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePostContent from './SinglePostContent';
import { fetchPostsByCategories } from '../actions/postsActions';

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
            posts.map(post => <SinglePostContent key={post.id} {...post} />)}
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
