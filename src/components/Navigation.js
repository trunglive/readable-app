import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';
import AllCategories from './AllCategories';

const Navigation = () => (
  <div className='navigation'>
    <Container textAlign="center">
      <Link to="/">
        <Header
          as='h2'
          image='https://image.flaticon.com/icons/svg/234/234613.svg'
          content='Readable'
        />
      </Link>
    </Container>

    <AllCategories />
  </div>
);

export default Navigation;
