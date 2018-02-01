import React, { Component } from 'react';
import AllCategories from './AllCategories';
import AllPosts from './AllPosts';

const HomePage = () => (
  <div>
    <AllCategories />
    <a href="/createpost">Create Post</a>
    <AllPosts />
  </div>
);

export default HomePage;
