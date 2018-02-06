import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message, Form, Input, Grid } from 'semantic-ui-react';
import uuid from 'uuid';
import moment from 'moment';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.postInfo ? props.postInfo.id : uuid(),
      category: props.postInfo ? props.postInfo.category : 'react',
      timestamp: moment().valueOf(),
      title: props.postInfo ? props.postInfo.title : '',
      author: props.postInfo ? props.postInfo.author : '',
      body: props.postInfo ? props.postInfo.body : '',
      voteScore: props.postInfo ? props.postInfo.voteScore : 0,
      commentCount: props.postInfo ? props.postInfo.commentCount : 0,
      error: ''
    };
  }

  onCategoryChange = (e, result) => {
    const category = result.value;
    this.setState({ category });
  };

  onTitleChange = e => {
    const title = e.target.value;
    this.setState({ title });
  };

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
    if (!this.state.title || !this.state.author || !this.state.body) {
      this.setState(() => ({ error: 'Please fill out all the fields' }));
    } else {
      this.props.onSubmit({
        id: this.state.id,
        timestamp: this.state.timestamp,
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        category: this.state.category,
        voteScore: this.state.voteScore,
        deleted: false,
        commentCount: this.state.commentCount
      });
      this.setState({
        title: '',
        body: '',
        author: '',
        category: ''
      });
    }
  };

  render() {
    return (
      <div>
        <Grid columns={2} celled="internally" centered>
          <Grid.Column>
            {this.state.error && (
              <Message warning header="Error" content={this.state.error} />
            )}
            <Form onSubmit={this.onFormSubmit}>
              <Form.Select
                required
                label="Category"
                options={options}
                placeholder="category"
                value={this.state.category}
                onChange={this.onCategoryChange}
              />
              <Form.Field required>
                <label>Title</label>
                <Input
                  type="text"
                  placeholder="title"
                  value={this.state.title}
                  onChange={this.onTitleChange}
                />
              </Form.Field>

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
                placeholder="content"
                value={this.state.body}
                onChange={this.onBodyChange}
              />

              <Form.Button className="submit-button">
                {this.props.postInfo ? 'Edit Post' : 'Add Post'}
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default PostForm;

const options = [
  { key: 'react', text: 'React', value: 'react' },
  { key: 'redux', text: 'Redux', value: 'redux' },
  { key: 'udacity', text: 'Udacity', value: 'udacity' }
];
