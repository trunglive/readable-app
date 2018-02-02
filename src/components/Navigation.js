import React from 'react';
import { Link } from 'react-router-dom';
import AllCategories from './AllCategories';

const Navigation = () => (
  <div>
    <Link to="/">Readable</Link>
    <AllCategories />
  </div>
)

export default Navigation;