import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SinglePostContent from './SinglePostContent';
import NoPostAlert from './NoPostAlert';
import { fetchPostsByCategories } from '../actions/postsActions';
import { Grid, Container, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class PostsByCategories extends Component {
  componentDidMount() {
    this.props.fetchPostsByCategories(this.props.match.params.category);
  }

  render() {
    const { posts } = this.props;

    return (
      <Grid centered columns={2} stackable relaxed>
        <Grid.Column>
          <Container textAlign="right">
            <Link to="/createpost">
              <Button className="add-post-button" size="small">
                <Icon name="plus" />
                Add Post
              </Button>
            </Link>
          </Container>

          {!posts.length && (
            <NoPostAlert mood="meh" message="No post found in this topic" />
          )}

          {posts.length > 0 &&
            posts.map(post => <SinglePostContent key={post.id} {...post} />)}
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
};

export default connect(mapStateToProps, { fetchPostsByCategories })(
  PostsByCategories
);