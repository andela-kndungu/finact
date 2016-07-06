import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from './components/CommentBox.jsx';

ReactDom.render(
  <CommentBox url="http://finact.herokuapp.com/api/comments/" />,
  document.getElementById('app')
);

