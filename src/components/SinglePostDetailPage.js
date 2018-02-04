import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Button, Container } from 'semantic-ui-react';
import { fetchAllComments } from '../actions/commentsActions';
import { fetchPost } from '../actions/postsActions';
import SinglePostContent from './SinglePostContent';
import SingleCommentContent from './SingleCommentContent';
import CreateCommentForm from './CreateCommentForm';
import Comment from 'semantic-ui-react/dist/commonjs/views/Comment/Comment';

class SinglePostDetailPage extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
    this.props.fetchAllComments(this.props.match.params.id);
  }

  render() {
    const { post, comments } = this.props;
    const commentsId = comments.map(comment => comment.id);
    // console.log(this.props.history.push);
    return (
      <Container>
        <Grid centered>
          <Grid.Column width={8}>
            {post.length > 0 && (
              <SinglePostContent
                {...post[0]}
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

const mapStateToProps = state => {
  return {
    post: state.posts,
    comments: state.comments
  };
};

export default connect(mapStateToProps, { fetchPost, fetchAllComments })(
  SinglePostDetailPage
);
