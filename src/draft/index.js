import React, { Component } from 'react';

import * as API from '../utils/api';

export default class Display extends Component {
  state = {
    categories: null
  }

  componentDidMount() {
    API.getAllCategories().then(categories => this.setState({ categories }));
  }

  render() {
    console.log(this.state.categories);
    return (
      <div>
        Just Testing
      </div>
    )
  }
}

