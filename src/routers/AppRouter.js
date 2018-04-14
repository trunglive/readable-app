import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../components/header/Navigation';
import HomePage from '../components/HomePage';
import CreatePostPage from '../components/post/CreatePostPage';
import EditPostPage from '../components/post/EditPostPage';
import EditCommentPage from '../components/comment/EditCommentPage';
import PostsByCategories from '../components/post/PostsByCategories';
import SinglePostDetailPage from '../components/post/SinglePostDetailPage';
import NotFoundPage from '../components/not-found/NotFoundPage';
import Footer from '../components/footer/Footer';

const AppRouter = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/createpost" component={CreatePostPage} />
        <Route exact path="/editpost/:id" component={EditPostPage} />
        <Route exact path="/editcomment/:id" component={EditCommentPage} />
        <Route exact path="/:category" component={PostsByCategories} />
        <Route
          exact
          path="/:category/:post_id"
          component={SinglePostDetailPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;