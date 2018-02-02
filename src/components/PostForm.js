import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.postInfo ? props.postInfo.id : uuid(),
      category: props.postInfo ? props.postInfo.category : 'react',
      title: props.postInfo ? props.postInfo.title : '',
      author: props.postInfo ? props.postInfo.author : '',
      body: props.postInfo ? props.postInfo.body : '',
      error: ''
    };
  }

  onCategoryChange = e => {
    const category = e.target.value;
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
      this.setState(() => ({ error: 'Please fill out all the forms' }));
    } else {
      this.props.onSubmit({
        id: this.state.id,
        timestamp: Date.now(),
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        category: this.state.category,
        voteScore: 1,
        deleted: false,
        commentCount: 0
      });
    }
  };

  render() {
 
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <select value={this.state.category} onChange={this.onCategoryChange}>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udacity">Udacity</option>
          </select>
          <input
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
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

export default PostForm;
