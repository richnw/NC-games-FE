import * as api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { reviewID } = useParams();

  useEffect(() => {
    api.fetchComments(reviewID).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [reviewID]);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <main>
      <ul>
        {comments.map((comment) => (
          <li>
            <p> user: {`${comment.author}`} </p>
            <p> {`${comment.body}`} </p>
            <br />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Comments;
