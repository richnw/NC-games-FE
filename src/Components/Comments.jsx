import * as api from "../api";
import { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchComments().then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <ul>
      {comments.map((comment) => (
        <li>{`${comment.author}`}</li>
      ))}
    </ul>
  );
};

export default Comments;
