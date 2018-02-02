import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PostsByCategories from '../components/PostsByCategories';
import CreatePostPage from '../components/CreatePostPage';
import EditPostPage from '../components/EditPostPage';
import EditCommentPage from '../components/EditCommentPage';
import SinglePostDetailPage from '../components/SinglePostDetailPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/createpost" component={CreatePostPage} />
      <Route path="/editpost/:id" component={EditPostPage} />
      <Route path="/editcomment/:id" component={EditCommentPage} />
      <Route exact path="/:category" component={PostsByCategories} />
      <Route path="/:category/:id" component={SinglePostDetailPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
