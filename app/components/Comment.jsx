import React from 'react';
import Remarkable from 'remarkable';

const Comment = (props) => {
  const rawMarkup = () => {
    const md = new Remarkable;
    const markup = md.render(props.children.toString());
    return { __html: markup };
  };

  return (
    <div>
      <h2>{props.author}</h2>
      <span dangerouslySetInnerHTML={rawMarkup()}></span>
    </div>
  );
};

Comment.propTypes = {
  author: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
};

export default Comment;

