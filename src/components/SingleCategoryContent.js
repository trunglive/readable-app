import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'semantic-ui-react';

const SingleCategoryContent = ({ path, name }) => (
  <Link to={path}>
    <Button className="category-button">#{name}</Button>
  </Link>
);

export default SingleCategoryContent;
