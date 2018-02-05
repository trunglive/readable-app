import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import SinglePostContent from './SinglePostContent';
import { fetchPostsByCategories } from '../actions/postsActions';
import PropTypes from 'prop-types';

class PostsByCategories extends Component {
  componentDidMount() {
    this.props.fetchPostsByCategories(this.props.match.params.category);
  }

  render() {
    const { posts } = this.props;

    return (
      <Grid centered>
        <Grid.Column width={8}>
          <ul>
            {posts.length > 0 &&
              posts.map(post => <SinglePostContent key={post.id} {...post} />)}
          </ul>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
});

PostsByCategories.propTypes = {
  posts: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchPostsByCategories })(
  PostsByCategories
);
