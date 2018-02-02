import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategoryPage = ({ path, name }) => (
  <li>
    <Link to={path}>
      {name}
    </Link>
  </li>
);

export default SingleCategoryPage;
