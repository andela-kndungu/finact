import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import FinactStore from '../stores/FinactStore.js';
import FinactActions from '../actions/FinactActions.js';

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = { comments: FinactStore.getAll() };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FinactActions.fetch(this.props.url);
    FinactStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    FinactStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      comments: FinactStore.getAll(),
    });
  }

  render() {
    return (
      <div>
        <CommentList comments={this.state.comments} />
        <CommentForm url={this.props.url} />
      </div>
    );
  }
}

CommentBox.propTypes = {
  url: React.PropTypes.string,
};

export default CommentBox;

