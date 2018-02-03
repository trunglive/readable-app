import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import AllCategories from './AllCategories';
import AllPosts from './AllPosts';

const HomePage = () => (
  <Grid centered>
    <Link to="/createpost">
      <Button color="orange" className="add-post-button" size="tiny">
        <Icon name="plus circle" />
        Add Post
      </Button>
    </Link>

    <Grid.Row>
      <AllPosts />
    </Grid.Row>
  </Grid>
);

export default HomePage;
