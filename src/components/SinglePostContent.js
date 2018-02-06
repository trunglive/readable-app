import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import {
  Grid,
  Container,
  Feed,
  Icon,
  Header,
  Modal,
  Button,
  Segment,
  Label
} from 'semantic-ui-react';
import {
  fetchAllPosts,
  fetchPost,
  fetchDeletePost,
  fetchVotePost
} from '../actions/postsActions';
import { fetchDeleteComment } from '../actions/commentsActions';
import moment from 'moment';
import PropTypes from 'prop-types';

class SinglePostContent extends Component {
  state = {
    modalOpen: false
  };

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  handleDeleteComments = () => {
    this.props.commentsId &&
      this.props.commentsId.map(commentId => {
        return this.props.dispatch(fetchDeleteComment(commentId));
      });
  };

  handleVoting = () => {
    if (this.props.goToHomepage) {
      this.props.dispatch(fetchPost(this.props.id));
    } else {
      this.props.dispatch(fetchAllPosts());
    }
  };

  render() {
    const {
      dispatch,
      id,
      timestamp,
      title,
      body,
      author,
      category,
      voteScore,
      commentCount,
      commentCounting,
      goToHomepage
    } = this.props;

    return (
      <div className="post">
        {!id ? (
          <NotFoundPage />
        ) : (
          <Segment padded className="post-container">
            <Link to={`/topic/${category}`}>
              <Label tag color="orange" attached="top right" id="post-tag">
                {category}
              </Label>
            </Link>
            <Feed size="large">
              <Feed.Event>
                <Feed.Label image="https://image.flaticon.com/icons/svg/145/145849.svg" />
                <Feed.Content>
                  <Feed.Summary>
                    <a className="author-name">{author}</a>
                    <span className="author-added"> added </span>
                    <Link
                      to={`/topic/${category}/${id}`}
                      className="title-link"
                    >
                      {title}
                    </Link>
                    <Feed.Date id="post-timestamp">
                      {moment(timestamp).format('lll')}
                    </Feed.Date>
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
                        this.handleVoting();
                      }}
                    />
                    {voteScore}
                    <Icon
                      id="post-icon"
                      name="thumbs down"
                      onClick={() => {
                        dispatch(fetchVotePost(id, 'downVote'));
                        this.handleVoting();
                      }}
                    />
                    <Link
                      to={`/topic/${category}/${id}`}
                      className="title-link"
                    >
                      <Icon id="post-icon" name="comment" />
                      {commentCount}
                    </Link>
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
                      typeof goToHomepage == 'function' && goToHomepage('/');
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
        )}
      </div>
    );
  }
}

SinglePostContent.propTypes = {
  id: PropTypes.string,
  timestamp: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  voteScore: PropTypes.number,
  commentCount: PropTypes.number
};

export default connect()(SinglePostContent);
