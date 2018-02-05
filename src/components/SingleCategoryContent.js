import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SingleCategoryContent = ({ path, name }) => (
  <Link to={path}>
    <Button className="category-button">#{name}</Button>
  </Link>
);

SingleCategoryContent.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default SingleCategoryContent;
