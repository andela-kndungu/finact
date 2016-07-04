import React from 'react';

const Comment = (props) => {
  return (
    <div>
      <h2>{props.author}</h2>
      {props.children}
    </div>
  );
};

Comment.propTypes = {
  author: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
};

export default Comment;

