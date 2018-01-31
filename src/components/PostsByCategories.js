import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsByCategories } from '../actions/posts';


class PostsByCategories extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPostsByCategories(this.props.match.params.category));
  }

  render() {
  
    return (
      <div>Posts by Categories</div>
    )
    
  }
}

export default connect()(PostsByCategories);
