import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PostsByCategories from '../components/PostsByCategories';
import CreatePostPage from '../components/CreatePostPage';
import EditPostPage from '../components/EditPostPage';
import EditCommentPage from '../components/EditCommentPage';
import SinglePostDetailPage from '../components/SinglePostDetailPage';
import NotFoundPage from '../components/NotFoundPage';
import AllCategories from '../components/AllCategories';
import Navigation from '../components/Navigation';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/createpost" component={CreatePostPage} />
        <Route exact path="/editpost/:id" component={EditPostPage} />
        <Route exact path="/editcomment/:id" component={EditCommentPage} />
        <Route exact path="/:category" component={PostsByCategories} />
        <Route exact path="/:category/:id" component={SinglePostDetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
