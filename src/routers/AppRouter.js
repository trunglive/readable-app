import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PostsByCategories from '../components/PostsByCategories';
import CreatePostPage from '../components/CreatePostPage';
import EditPostPage from '../components/EditPostPage';

import SinglePostPage from '../components/SinglePostPage';
import SinglePostDetailPage from '../components/SinglePostDetailPage';

// import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/createpost" component={CreatePostPage} />
      <Route exact path="/editpost/:id" component={EditPostPage} />
      <Route exact path="/:category" component={PostsByCategories} />
      <Route exact path="/:category/:id" component={SinglePostDetailPage} />

    </Switch>
  </BrowserRouter>
);

export default AppRouter;
