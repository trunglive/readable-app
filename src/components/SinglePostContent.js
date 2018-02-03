import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Feed, Icon, Header, Modal, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { fetchDeletePost, fetchVotePost } from '../actions/postsActions';

class SinglePostContent extends Component {
  state = {
    modalOpen: false
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const {
      dispatch,
      id,
      title,
      body,
      author,
      category,
      voteScore,
      commentCount
    } = this.props;
    return (
      <div className="post">
        <Segment padded>
          <Feed size="large">
            <Feed.Event>
              <Feed.Label image="https://image.flaticon.com/icons/svg/236/236831.svg" />
              <Feed.Content>
                <Feed.Summary>
                  <a>{author}</a> added{' '}
                  <Link to={`/${category}/${id}`}>{title}</Link>
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>{body}</Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon
                      name="thumbs up"
                      onClick={() => {
                        dispatch(fetchVotePost(id, 'upVote'));
                      }}
                    />
                  </Feed.Like>
                  {voteScore}
                  <Feed.Like>
                    <Icon
                      name="thumbs down"
                      onClick={() => {
                        dispatch(fetchVotePost(id, 'downVote'));
                      }}
                    />
                  </Feed.Like>
                  <Feed.Like>
                    <Icon name="comment" />
                    {commentCount} comments
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>

          <Modal
            trigger={
              <Button onClick={this.handleOpen} size="mini">
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
                }}
                inverted
              >
                <Icon name="checkmark" />
                Yes
              </Button>
            </Modal.Actions>
          </Modal>
          <Link to={`/editpost/${id}`}>
            <Button size="mini">
              <Icon name="edit" /> Edit Post
            </Button>
          </Link>
        </Segment>
      </div>
    );
  }
}

export default connect()(SinglePostContent);
