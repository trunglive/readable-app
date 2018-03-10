import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react';
import { fetchAllPosts } from '../actions/postsActions';
import { fetchAllComments } from '../actions/commentsActions';
import SinglePostContent from './SinglePostContent';
import SingleCommentContent from './SingleCommentContent';
import CreateCommentForm from './CreateCommentForm';
import SortingDropdown from './SortingDropdown';
import NotFoundPage from './NotFoundPage';
import PostSelectors from '../selectors/PostSelectors';
import PropTypes from 'prop-types';

class SinglePostDetailPage extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
    this.props.fetchAllComments(this.props.match.params.post_id);
  }

  render() {
    const { posts, comments } = this.props;
    const { category } = this.props.match.params;
    const topics = posts.map(post => post.category);
    const post = posts.filter(
      post => post.id === this.props.match.params.post_id
    );
    const singlePost = { ...post[0] };
    const commentsId = comments.map(comment => comment.id);

    return (
      <div>
        {topics.includes(category) && Object.keys(singlePost).length > 0 ? (
          <div>
            <Grid centered columns={2} stackable relaxed>
              <Grid.Column>
                <div>
                  <SinglePostContent
                    {...singlePost}
                    commentsId={commentsId}
                    goToHomepage={this.props.history.push}
                  />
                  <Container
                    textAlign="right"
                    className="sorting-comment-dropdown"
                  >
                    {comments.length > 0 && <SortingDropdown />}
                  </Container>
                </div>

                {comments.length > 0 &&
                  comments.map(comment => (
                    <SingleCommentContent
                      key={comment.id}
                      {...comment}
                      singlePostUrl={this.props.match.url}
                    />
                  ))}
              </Grid.Column>
            </Grid>
            <CreateCommentForm parentId={this.props.match.params.post_id} />
          </div>
        ) : (
          <NotFoundPage />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ posts, comments, sorting }) => ({
  posts,
  comments: PostSelectors(comments, sorting)
});

SinglePostDetailPage.propTypes = {
  comments: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { fetchAllPosts, fetchAllComments })(
  SinglePostDetailPage
);