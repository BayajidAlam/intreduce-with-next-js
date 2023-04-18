import { useRouter } from 'next/router';
import React from 'react';

const CommentDetails = () => {

  const router = useRouter();
  const { blogId, commentId } = router.query;
  return (
    <div>
          <h1>comment details page</h1>
          <p>Blog no {blogId}</p>
          <p>CommentNo {commentId}</p>
    </div>
  );
};

export default CommentDetails;