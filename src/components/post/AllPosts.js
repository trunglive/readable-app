import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostSelectors from '../../selectors/PostSelectors';
import SinglePostContent from './SinglePostContent';
import NoPostAlert from '../not-found/NoPostAlert';
import { fetchAllPosts } from '../../actions/postsActions';
import PropTypes from 'prop-types';

class AllPosts extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        {!posts.length && (
          <NoPostAlert mood="smile" message="Let's create a new post" />
        )}

        {posts.length > 0 &&
          posts.map(post => <SinglePostContent key={post.id} {...post} />)}
      </div>
    );
  }
}

const mapStateToProps = ({ posts, sorting }) => ({
  posts: PostSelectors(posts, sorting)
});

AllPosts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { fetchAllPosts })(AllPosts);