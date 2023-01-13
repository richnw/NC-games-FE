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
    return (
      <section>
        <p>
          <CommentAdder
            currentUser={currentUser}
            setComments={setComments}
            reviewID={reviewID}
          />
        </p>
        <p>No comments on this review... yet</p>
      </section>
    );
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
            <li key={comment.comment_id} className="CommentsListItem">
              <p> user: {`${comment.author}`} </p>
              <p> {`${comment.body}`} </p>
            </li>
          ))}
        </ul>
      </main>
    );
};

export default Comments;
