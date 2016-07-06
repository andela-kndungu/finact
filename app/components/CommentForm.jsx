import React from 'react';

class CommentForm extends React.Component {
  constructor() {
    super();

    this.state = {
      author: '',
      text: '',
    };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ author: '', text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <input
            type="text"
            placeholder="Say something..."
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CommentForm;

