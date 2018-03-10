import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Comment, Icon } from 'semantic-ui-react';
import {
  fetchAllComments,
  fetchDeleteComment,
  fetchVoteComment
} from '../actions/commentsActions';
import { fetchPost } from '../actions/postsActions';
import moment from 'moment';
import PropTypes from 'prop-types';

const SingleCommentContent = ({
  dispatch,
  id,
  parentId,
  body,
  author,
  voteScore,
  timestamp,
  singlePostUrl
}) => {
  return (
    <Comment.Group>
      <Comment>
        <Comment.Avatar
          as="a"
          src="https://image.flaticon.com/icons/svg/145/145849.svg"
        />
        <Comment.Content>
          <Comment.Author>
            {author}
            <Comment.Metadata className="comment-timestamp">
              <div>{moment(timestamp).format('lll')}</div>
            </Comment.Metadata>
          </Comment.Author>
          <Comment.Text id="comment-content">{body}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>
              <Comment.Metadata>
                <div>
                  <Icon
                    name="thumbs up"
                    onClick={() => {
                      dispatch(fetchVoteComment(id, 'upVote'));
                      dispatch(fetchAllComments(parentId));
                    }}
                  />
                  {voteScore}
                </div>
                <div>
                  <Icon
                    name="thumbs down"
                    onClick={() => {
                      dispatch(fetchVoteComment(id, 'downVote'));
                      dispatch(fetchAllComments(parentId));
                    }}
                  />
                </div>
              </Comment.Metadata>
            </Comment.Action>
            <Link
              to={{
                pathname: `/editcomment/${id}`,
                state: { post: { singlePostUrl } }
              }}
            >
              Edit
            </Link>
            <Comment.Action
              onClick={() => {
                dispatch(fetchDeleteComment(id));
                dispatch(fetchPost(parentId));
              }}
            >
              Delete
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );
};

SingleCommentContent.propTypes = {
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired
};

export default connect()(SingleCommentContent);
