import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import NotFoundPage from './NotFoundPage';
import { fetchEditComment } from '../actions/commentsActions';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class EditCommentPage extends Component {
  render() {
    const comment = this.props.comments.filter(
      comment => comment.id === this.props.match.params.id
    );
    const matchedComment = { ...comment[0] };

    return (
      <div>
        {Object.keys(matchedComment).length > 0 ? (
          <Container textAlign="center">
            <CommentForm
              commentInfo={matchedComment}
              onSubmit={content => {
                this.props.history.push(
                  this.props.location.state.post.singlePostUrl
                );
                this.props.fetchEditComment(content.id, content);
              }}
            />
          </Container>
        ) : (
          <NotFoundPage />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({
  comments
});

EditCommentPage.propTypes = {
  comments: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { fetchEditComment })(EditCommentPage);
