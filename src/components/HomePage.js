import React, { Component } from 'react';

import AllCategories from './AllCategories';
import AllPosts from './AllPosts';

const HomePage = (props) => {
  
  console.log(props);
    return (
      <div>
        
        <AllCategories />
        <AllPosts />
      </div>
    )
}

export default HomePage;
