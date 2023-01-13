import { useState } from "react";
import * as api from "../api";
import Error from "./Error";

const CommentAdder = ({ currentUser, setComments, reviewID }) => {
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((currComments) => {
      return [
        { author: currentUser.currentUser, body: newComment },
        ...currComments,
      ];
    });
    api
      .postComment(reviewID, newComment, currentUser.currentUser)
      .then(() => {
        setNewComment("");
      })
      .catch((err) => {
        setError({ err });
        setComments((currComments) => {
          return currComments.slice(1);
        });
      });
  };

  if (error) {
    return <Error />;
  }

  return (
    <form className="VotesAndAddComment" onSubmit={handleSubmit}>
      <label htmlFor="Add a new comment">
        <input
          required="required"
          placeholder="Write your comment here..."
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </label>
      <button type="submit">Add comment</button>
    </form>
  );
};

export default CommentAdder;
