import React from 'react';
import { specialLink } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    Not Found 404 - <specialLink to="/">Go back to Homepage</specialLink>
  </div>
);

export default NotFoundPage;
