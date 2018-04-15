import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AllPosts from './post/AllPosts';
import SortingDropdown from './sort/SortingDropdown';
import { Container, Grid, Button, Icon } from 'semantic-ui-react';

const HomePage = props => (
  <Grid centered columns={2} stackable relaxed>
    <Grid.Column>
      <Container textAlign="right">
        <Link to="/createpost">
          <Button className="add-post-button" size="small">
            <Icon name="plus" />
            Add Post
          </Button>
        </Link>
        {props.posts.length > 0 ? <SortingDropdown /> : null}
      </Container>
      <AllPosts />
    </Grid.Column>
  </Grid>
);

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps)(HomePage);