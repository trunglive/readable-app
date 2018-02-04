import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Container,
  Feed,
  Icon,
  Header,
  Modal,
  Button,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { fetchDeletePost, fetchVotePost } from '../actions/postsActions';
import { fetchDeleteComment } from '../actions/commentsActions';

class SinglePostContent extends Component {
  state = {
    modalOpen: false
  };

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });
  handleDeleteComments = () => {
    this.props.commentsId.map(commentId => {
      return this.props.dispatch(fetchDeleteComment(commentId));
    });
  };

  render() {
    console.log(this.props);
    const {
      dispatch,
      id,
      title,
      body,
      author,
      category,
      voteScore,
      commentCount,
      goToHomepage
    } = this.props;
    return (
      <div className="post">
        <Segment padded>
          <Feed size="large">
            <Feed.Event>
              <Feed.Label image="https://image.flaticon.com/icons/svg/145/145849.svg" />
              <Feed.Content>
                <Feed.Summary>
                  <a className="author-name">{author}</a><span className="add"> added</span>
                  <Link to={`/${category}/${id}`} className="title-link">
                    {' '}
                    {title}
                  </Link>
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text id="post-content">
                  {body}
                </Feed.Extra>
                <Feed.Meta>
                  <Icon
                    id="post-icon"
                    name="thumbs up"
                    onClick={() => {
                      dispatch(fetchVotePost(id, 'upVote'));
                    }}
                  />

                  {voteScore}

                  <Icon
                    id="post-icon"
                    name="thumbs down"
                    onClick={() => {
                      dispatch(fetchVotePost(id, 'downVote'));
                    }}
                  />

                  <Icon id="post-icon" name="comment" />
                  {commentCount}
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
          <Container textAlign="right">
            <Modal
              trigger={
                <Button
                  onClick={this.handleOpen}
                  size="small"
                  className="delete-post-button"
                >
                  <Icon name="trash" /> Delete Post
                </Button>
              }
              open={this.state.modalOpen}
              onClose={this.handleClose}
              basic
              size="mini"
            >
              <Header icon="trash" content="Delete Post" />
              <Modal.Content>
                <p>Do you want to delete this post?</p>
              </Modal.Content>
              <Modal.Actions>
                <Button basic color="red" onClick={this.handleClose} inverted>
                  <Icon name="remove" /> No
                </Button>
                <Button
                  color="blue"
                  onClick={() => {
                    dispatch(fetchDeletePost(id));
                    this.handleDeleteComments();
                    goToHomepage('/');
                  }}
                  inverted
                >
                  <Icon name="checkmark" />
                  Yes
                </Button>
              </Modal.Actions>
            </Modal>
            <Link to={`/editpost/${id}`}>
              <Button size="small" className="edit-post-button">
                <Icon name="edit" /> Edit Post
              </Button>
            </Link>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default connect()(SinglePostContent);
