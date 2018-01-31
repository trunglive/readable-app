import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PostsByCategories from '../components/PostsByCategories';
import CreatePostPage from '../components/CreatePostPage';
import SinglePostPage from '../components/SinglePostPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/createpost" component={CreatePostPage} />
      <Route path="/:category" component={PostsByCategories} />
      
      <Route path="/:category/:id" component={SinglePostPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
