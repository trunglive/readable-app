import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const NotFoundPage = () => (
  <Container textAlign="center">
    <p>This page doesn't exist</p>
    <span>Go back to </span><Link to="/">Homepage</Link>
  </Container>
);

export default NotFoundPage;
