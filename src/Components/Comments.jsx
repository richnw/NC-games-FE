import * as api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentAdder from "./CommentAdder";

const Comments = ({ currentUser }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { reviewID } = useParams();

  useEffect(() => {
    api.fetchComments(reviewID).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [reviewID]);

  if (isLoading) return <p>Loading...</p>;
  else if (comments.length === 0)
    return <p>No comments on this review... yet</p>;
  else
    return (
      <main>
        <CommentAdder
          currentUser={currentUser}
          setComments={setComments}
          reviewID={reviewID}
        />
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
