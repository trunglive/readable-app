import React, { Component } from 'react';
// import { connect } from 'react-redux';

import AllCategories from './AllCategories';

class HomePage extends Component {

  render() {
    return (
      <div>
        HomePage
        <AllCategories />
        Posts
      </div>
    )
  }
}

export default HomePage;
