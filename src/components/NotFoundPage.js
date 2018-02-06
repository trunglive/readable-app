import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Statistic, Icon } from 'semantic-ui-react';

const NotFoundPage = () => (
  <Container textAlign="center">
    <Statistic id="content-not-found-page">
      <Statistic.Value>
        <Icon name="frown" />
      </Statistic.Value>
      <Statistic.Label className="content-not-found-text">Content Not Found</Statistic.Label>
      <Statistic.Label>
        Go back to <Link to="/">Homepage</Link>
      </Statistic.Label>
    </Statistic>
  </Container>
);

export default NotFoundPage;
