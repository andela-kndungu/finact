import React from 'react';
import Comment from './Comment.jsx';

function processNodes(comments) {
  const commentsJsx = comments.map((comment, index) => {
    return (
      <Comment
        author={comment.author}
        key={index}
      >
        {comment.text}
      </Comment>
    );
  });

  return commentsJsx;
}

const CommentList = (props) => {
  return (
    <div>
      {processNodes(props.comments)}
    </div>
  );
};

CommentList.propTypes = {
  comments: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      author: React.PropTypes.string,
      text: React.PropTypes.string,
    })
  ),
};

export default CommentList;

