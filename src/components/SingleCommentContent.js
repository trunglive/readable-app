import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Comment, Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {
  fetchDeleteComment,
  fetchVoteComment
} from '../actions/commentsActions';

const SingleCommentContent = ({
  dispatch,
  id,
  parentId,
  body,
  author,
  voteScore
}) => (
  <Grid.Row className="single-comment-group">
    <Comment.Group>
      <Comment>
        <Comment.Avatar
          as="a"
          src="https://image.flaticon.com/icons/svg/236/236831.svg"
        />
        <Comment.Content>
          <Comment.Author>{author}</Comment.Author>
          <Comment.Text>{body}</Comment.Text>

          <Comment.Actions>
            <Comment.Action>
              <Comment.Metadata>
                <div>
                  <Icon
                    name="thumbs up"
                    onClick={() => {
                      dispatch(fetchVoteComment(id, 'upVote'));
                    }}
                  />
                  {voteScore}
                </div>
                <div>
                  <Icon
                    name="thumbs down"
                    onClick={() => {
                      dispatch(fetchVoteComment(id, 'downVote'));
                    }}
                  />
                </div>
              </Comment.Metadata>
            </Comment.Action>

            <Link to={`/editcomment/${id}`}>
              <Comment.Action>Edit</Comment.Action>
            </Link>
            <Comment.Action
              onClick={() => {
                dispatch(fetchDeleteComment(id));
              }}
            >
              Delete
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  </Grid.Row>
);

export default connect()(SingleCommentContent);
