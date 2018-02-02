import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AllCategories from './AllCategories';
import AllPosts from './AllPosts';

const HomePage = () => (
  <div>
    <AllCategories />
    <Link to="/createpost">Create Post</Link>
    <AllPosts />
  </div>
);

export default HomePage;
