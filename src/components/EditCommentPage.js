import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import CommentForm from './CommentForm';
import { fetchEditComment } from '../actions/commentsActions';
import PropTypes from 'prop-types';

class EditCommentPage extends Component {
  render() {
    const comment = this.props.comments.filter(
      comment => comment.id === this.props.match.params.id
    );

    return (
      <div>
        <Container textAlign="center">
          <CommentForm
            commentInfo={comment[0]}
            onSubmit={content => {
              this.props.fetchEditComment(content.id, content);
            }}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({
  comments
});

EditCommentPage.propTypes = {
  comments: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchEditComment })(EditCommentPage);
