import React from 'react';
import FinactActions from '../actions/FinactActions.js';

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
    FinactActions.post(this.props.url, this.state);
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

CommentForm.propTypes = {
  url: React.PropTypes.string,
};

export default CommentForm;

