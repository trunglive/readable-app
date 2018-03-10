import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostsByCategories from './PostsByCategories';
import { fetchPostsByCategories } from '../actions/postsActions';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SingleCategoryContent = ({ name, dispatch }) => (
  <Link to={`/${name}`}>
    <Button
      className="category-button"
      onClick={() => dispatch(fetchPostsByCategories(name))}
    >
      #{name}
    </Button>
  </Link>
);

SingleCategoryContent.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default connect()(SingleCategoryContent);