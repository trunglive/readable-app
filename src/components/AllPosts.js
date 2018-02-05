import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostSelectors from '../selectors/PostSelectors';
import SinglePostContent from './SinglePostContent';
import { fetchAllPosts } from '../actions/postsActions';
import moment from 'moment';

class AllPosts extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
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

const mapStateToProps = ({ posts, sorting }) => ({
  posts: PostSelectors(posts, sorting)
});

export default connect(mapStateToProps, { fetchAllPosts })(AllPosts);
