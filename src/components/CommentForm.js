import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Message,
  Button,
  Form,
  Input,
  Container,
  Grid
} from 'semantic-ui-react';
import uuid from 'uuid';
import moment from 'moment';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.commentInfo ? props.commentInfo.id : uuid(),
      parentId: props.commentInfo
        ? props.commentInfo.parentId
        : props.parentPostId,
      timestamp: moment().valueOf(),
      author: props.commentInfo ? props.commentInfo.author : '',
      body: props.commentInfo ? props.commentInfo.body : '',
      voteScore: props.commentInfo ? props.commentInfo.voteScore : 0,
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
      this.setState(() => ({ error: 'Please fill out all the fields' }));
    } else {
      this.props.onSubmit({
        id: this.state.id,
        parentId: this.state.parentId,
        timestamp: this.state.timestamp,
        author: this.state.author,
        body: this.state.body,
        voteScore: this.state.voteScore,
        deleted: false,
        parentDeleted: false
      });
      this.setState({
        id: uuid(),
        author: '',
        body: ''
      });
    }
  };

  render() {
    return (
      <Grid columns={2} celled="internally" centered>
        <Grid.Column className="comment-form">
          {this.state.error && (
            <Message warning header="Error" content={this.state.error} />
          )}

          <Form onSubmit={this.onFormSubmit}>
            <Form.Field required>
              <label>Author</label>
              <Input
                type="text"
                placeholder="author"
                value={this.state.author}
                onChange={this.onAuthorChange}
              />
            </Form.Field>

            <Form.TextArea
              required
              label="Content"
              type="text"
              placeholder="body"
              value={this.state.body}
              onChange={this.onBodyChange}
            />

            <Form.Button className="submit-button">Submit</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default CommentForm;
