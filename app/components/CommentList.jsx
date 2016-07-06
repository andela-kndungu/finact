import React from 'react';
// import Comment from './Comment.jsx';
import FinactStore from '../stores/FinactStore.js';

function getComments() {
  return FinactStore.getAll();
}

export default class CommentList extends React.Component {
  constructor() {
    super();
    this.state = { comments: getComments() };
  }

  componentWillUnmount() {
    FinactStore.removeChangeListener(this.onChange);
  }

  componenntDidMount() {
    FinactStore.addChangeListener(this.onChange);
  }

  render() {
    return (
      <h1>{this.state.comments.length}</h1>
    );
  }

}

