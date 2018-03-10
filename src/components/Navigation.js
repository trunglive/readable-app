import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Grid } from 'semantic-ui-react';
import AllCategories from './AllCategories';

const Navigation = () => (
  <div className="navigation">
    <Grid centered stackable>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Link to="/">
            <Header
              as="h2"
              image="https://image.flaticon.com/icons/svg/134/134905.svg"
              content="Readable"
              id="readable-logo"
            />
          </Link>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
      <AllCategories />
      </Grid.Row>
    </Grid>
  </div>
);

export default Navigation;