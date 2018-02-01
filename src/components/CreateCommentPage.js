import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAddComment } from '../actions/comments';
import uuid from 'uuid';

class CreateCommentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.commentInfo ? props.commentInfo.id : uuid(),
      parentId: '',
      author: props.commentInfo ? props.commentInfo.author : '',
      body: props.commentInfo ? props.commentInfo.body : '',
      error: ''
    };
  }

  onAuthorChange = e => {
    const author = e.target.value;
    this.setState({ author });
  };

  onBodyChange = e => {
    const body = e.target.value;
    this.setState({ body });
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (!this.state.author || !this.state.body) {
      this.setState(() => ({ error: 'Please fill out all the forms' }));
    } else {
      this.props.fetchAddComment({
        id: this.state.id,
        parentId: this.state.parentId,
        timestamp: Date.now(),
        author: this.state.author,
        body: this.state.body,
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      });
      this.props.history.push('/');
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        Comment Page
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="author"
            value={this.state.author}
            onChange={this.onAuthorChange}
          />
          <textarea
            type="text"
            placeholder="body"
            value={this.state.body}
            onChange={this.onBodyChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchAddComment })(CreateCommentPage);
