import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

export default function () {
  return (
    <div>
      <h1>Comment Box</h1>
      <CommentList />
      <CommentForm />
    </div>
  );
}

