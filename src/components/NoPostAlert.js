import React from 'react';
import { Container, Statistic, Icon } from 'semantic-ui-react';

const NoPostAlert = ({ mood, message }) => (
  <Container textAlign="center">
    <Statistic id="content-not-found-page">
      <Statistic.Value>
        <Icon name={mood} />
      </Statistic.Value>
      <Statistic.Label className='content-not-found-text'>
        {message}
      </Statistic.Label>
    </Statistic>
  </Container>
)

export default NoPostAlert;
