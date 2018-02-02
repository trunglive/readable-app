import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleCategoryPage from './SingleCategoryPage';
import { fetchAllCategories } from '../actions/categoriesActions';

class AllCategories extends Component {
  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        <p>All Categories:</p>
        <ul>
          {categories.length > 0 &&
            categories.map(category => (
              <SingleCategoryPage key={category.name} {...category} />
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

export default connect(mapStateToProps, { fetchAllCategories })(AllCategories);
