import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleCategoryContent from './SingleCategoryContent';
import { fetchAllCategories } from '../actions/categoriesActions';
import PropTypes from 'prop-types';

class AllCategories extends Component {
  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <Link to="/">
          <Button className="category-button">All</Button>
        </Link>
        {categories.length > 0 &&
          categories.map(category => (
            <SingleCategoryContent key={category.path} {...category} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

AllCategories.propTypes = {
  categories: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { fetchAllCategories })(AllCategories);