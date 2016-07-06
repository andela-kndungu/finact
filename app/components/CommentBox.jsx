import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import FinactStore from '../stores/FinactStore.js';

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = { comments: FinactStore.getAll() };
  }

  componentDidMount() {
    FinactStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    FinactStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <div>
        <CommentList comments={this.state.comments} />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;

