import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Button, Container } from 'semantic-ui-react';
import { fetchAllComments } from '../actions/commentsActions';
import { fetchPost } from '../actions/postsActions';
import SinglePostContent from './SinglePostContent';
import SingleCommentContent from './SingleCommentContent';
import CreateCommentForm from './CreateCommentForm';
import PropTypes from 'prop-types';

class SinglePostDetailPage extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
    this.props.fetchAllComments(this.props.match.params.id);
  }

  render() {
    const { posts, comments } = this.props;
    const commentsId = comments.map(comment => comment.id);

    return (
      <Container>
        <Grid centered>
          <Grid.Column width={8}>
            {posts.length > 0 && (
              <SinglePostContent
                {...posts[0]}
                commentsId={commentsId}
                goToHomepage={this.props.history.push}
              />
            )}
            {comments.length > 0 &&
              comments.map(comment => (
                <SingleCommentContent key={comment.id} {...comment} />
              ))}
          </Grid.Column>
        </Grid>
        <CreateCommentForm parentId={this.props.match.params.id} />
      </Container>
    );
  }
}

const mapStateToProps = ({ posts, comments }) => ({
  posts,
  comments
});

SinglePostDetailPage.propTypes = {
  posts: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchPost, fetchAllComments })(
  SinglePostDetailPage
);
